export function parse(data: any) {
    return data && JSON?.parse(JSON?.stringify(data))
  }