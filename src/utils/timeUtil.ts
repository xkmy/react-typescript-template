import dayjs, { OpUnitType } from 'dayjs'

export type Format = 'number' | 'YYYY-MM' | 'YYYY-MM-DD' | 'YYYY-MM-DD HH' | 'YYYY-MM-DD HH:mm:ss'

export type TimeType = 'second' | 'millisecond'

const isSecond = (time: number) => time.toString().length === 10

const isMillisecond = (time: number) => time.toString().length === 13

const formatTime = (time: number, format: Format = 'YYYY-MM-DD') => {
  if (isSecond(time)) {
    return dayjs.unix(time).format(format)
  }
  if (isMillisecond(time)) {
    return dayjs(time).format(format)
  }
  return ''
}

const getNowTime = (type: TimeType = 'second'): number => {
  return type === 'second' ? dayjs().unix() : dayjs().valueOf()
}

const getTimeStart = (type: OpUnitType) => dayjs().startOf(type)

const getEndOfTime = (type: OpUnitType) => dayjs().endOf(type)

export default {
  formatTime,
  getNowTime,
  getTimeStart,
  getEndOfTime
}
