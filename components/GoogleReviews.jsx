'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Reusable Star Rating Component
const StarRating = ({ rating, size = 'text-lg' }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className={`flex items-center gap-1 ${size}`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <span key={`full-${i}`} className="text-yellow-400">★</span>
      ))}
      {/* Half star */}
      {hasHalfStar && <span className="text-yellow-400">☆</span>}
      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <span key={`empty-${i}`} className="text-gray-400">☆</span>
      ))}
    </div>
  )
}

// Helper function to sort reviews by rating (5-star first, then 4, then 3)
const sortReviewsByRating = (reviews) => {
  const ratingOrder = [5, 4, 3]
  return reviews
    .filter(review => ratingOrder.includes(review.rating))
    .sort((a, b) => {
      // First by rating descending
      if (a.rating !== b.rating) {
        return b.rating - a.rating
      }
      // Then by time (assuming relative_time_description is comparable, but for simplicity, keep order)
      return 0
    })
    .slice(0, 10) // Max 10 reviews
}

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([])
  const [businessName, setBusinessName] = useState('')
  const [averageRating, setAverageRating] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID

      if (!apiKey || !placeId) {
        setError('Google Maps API key or Place ID is missing. Please check your environment variables.')
        setLoading(false)
        return
      }

      try {
        const fields = 'name,rating,reviews'
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`

        const response = await fetch(url)
        const data = await response.json()

        if (data.status !== 'OK') {
          throw new Error(`Google Places API error: ${data.status}`)
        }

        const place = data.result
        setBusinessName(place.name || 'Business')
        setAverageRating(place.rating || 0)

        const sortedReviews = sortReviewsByRating(place.reviews || [])
        setReviews(sortedReviews)
      } catch (err) {
        setError(err.message || 'Failed to fetch reviews')
      } finally {
        setLoading(false)
      }
    }

    fetchGoogleReviews()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Google Reviews</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading reviews...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Google Reviews</h2>
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Google Reviews</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            What our customers say about {businessName}
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <StarRating rating={averageRating} size="text-xl" />
            <span className="text-gray-700 dark:text-gray-300 font-semibold">
              {averageRating.toFixed(1)} out of 5
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={
                    review.profile_photo_url ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}&background=6366f1&color=ffffff&size=48`
                  }
                  alt={`${review.author_name} avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{review.author_name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{review.relative_time_description}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>

        {reviews.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-400">No reviews available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default GoogleReviews
