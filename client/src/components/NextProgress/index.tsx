import NextNprogress from 'nextjs-progressbar'

export const NextProgress = () => {
  return (
    <NextNprogress
      color="#29D"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      options={{
        showSpinner: false
      }}
    />
  )
}