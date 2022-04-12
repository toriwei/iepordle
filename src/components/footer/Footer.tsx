export const Footer = () => {
  return (
    <div className="Footer">
      <div className="mx-auto w-80 text-center mb-1 py-8">
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Brought to you by Undivided.
        </p>
        <p className="mt-4 italic text-sm text-gray-500 dark:text-gray-300">
          Visit us{' '}
          <a
            href="https://undivided.io/"
            className="underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{' '}
          to learn how we provide support for families raising kids with
          disabilities.
        </p>
      </div>
    </div>
  )
}
