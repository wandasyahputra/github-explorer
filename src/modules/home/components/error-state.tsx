import { ErrorScreen, NoNetworkScreen } from './error-overlay'

const ErrorState = ({
  isError,
  isPaused,
  refetch,
}: {
  isError: boolean
  isPaused: boolean
  refetch: () => void
}) => (
  <div className="bg-secondary flex h-70 w-full items-center justify-center rounded-lg">
    {isPaused ? <NoNetworkScreen /> : null}
    {isError ? <ErrorScreen refetch={refetch} /> : null}
  </div>
)

export default ErrorState
