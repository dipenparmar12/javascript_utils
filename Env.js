/**
 * check environment
 * @param {string} env
 * @returns boolean
 */
export const environment = (env = 'development') => {
  return process.env.NODE_ENV === env
}

/**
 * Determine is dev environment
 * @returns bool
 */
export const isDevEnv =
  process.env.NODE_ENV === 'development' ||
  localStorage.getItem('env') === 'development'

/**
 * Determine is Production environment
 * @returns bool
 */
export const isProdEnv = process.env.NODE_ENV === 'production'

export const isDev = (devVal, prodVal = null) => (isDevEnv ? devVal : prodVal)

const Env = {
  IsDev: isDevEnv,
  IsProd: isProdEnv,
}

export default Env
