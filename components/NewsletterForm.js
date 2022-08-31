import { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'Subscribe to our newsletter' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Successfully! 🎉 You are now subscribed.')
  }

  return (
    <div>
      <div className="mt-3 mb-3 w-full text-center text-2xl font-bold text-white">{title}</div>
      <div className="mb-6 w-full text-center text-white">
        Recieve weekly updates on new posts and features
      </div>
      <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="w-[400px] rounded-md border-2 border-gray-600 bg-[#230d2e] px-4 text-gray-500 focus:border-transparent focus:text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
            id="email-input"
            name="email"
            placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            className={`w-fit rounded-md bg-orange-500 py-2 px-4 font-medium text-white sm:py-0 ${
              subscribed ? 'cursor-default' : 'hover:bg-orange-700 dark:hover:bg-orange-400'
            } focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 dark:ring-offset-black`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you!' : 'Sign up'}
          </button>
        </div>
      </form>
      {error && (
        <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
      )}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
