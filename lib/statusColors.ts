export function statusColors(data: any) {

  switch (true) {
    case data.status === 'Active':
      return 'text-yellow-600 bg-yellow-50 ring-yellow-500/10';
      break
    case data.status === 'Done':
      return 'text-red-600 bg-green-50 ring-red-500/10'
      break
    case data.status === 'Did Not Finish':
      return 'text-red-600 bg-red-50 ring-red-500/10'
      break
    default:
      return 'text-white-600 bg-white ring-white-500/10'
  }
}