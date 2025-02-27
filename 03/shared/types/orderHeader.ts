export interface OrderHeader {
  orderId: number
  customerId?: number
  orderDate?: string
  orderDetail?: OrderDetail[]
}

export interface OrderDetail {
  rowNum: number
  productId?: number
  quantity?: number
  pricePerUnit?: number
}
