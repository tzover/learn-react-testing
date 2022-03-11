import { format } from 'date-fns'

// contexts
import { dateFormat } from '../contexts/AppBasicContext'

export function getDateTime() {
  const dateTime = format(new Date(), dateFormat)
  return { dateTime }
}
