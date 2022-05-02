import classNames from 'classnames'

type Props = {
  isDarkMode: boolean
}
export const Footer = ({ isDarkMode }: Props) => {
  const classes = classNames({
    'mt-2 w-50 rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm':
      isDarkMode,
    'mt-2 w-50 rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm':
      !isDarkMode,
  })
  return (
    <div className="Footer">
      <div className="mx-auto w-80 text-center mb-1 py-4">
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Brought to you by{' '}
          <a
            href="https://undivided.io/"
            className="underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Undivided
          </a>
          .
        </p>
        <p className="mt-2 italic text-sm text-gray-500 dark:text-gray-300">
          Undivided is an entire support system for parents raising kids with
          disabilities.
        </p>
        <a
          href="https://join.undivided.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className={classes}>
            Join for Free
          </button>
        </a>
      </div>
    </div>
  )
}
