import React from 'react'
import DataTable from "react-data-table-component"
import { Link } from 'react-router-dom'

const OrderTable = () => {

  const columns = [
    {
      name: 'Order Date',
      selector: row => row.orderDate,
      sortable:true,
    },
    {
      name: 'Purchase ID',
      selector: row => row.fp_id,
    },
    {
      name: 'Total Amount',
      selector: row => row.total_amount,
    },
    {
      name: 'Status',
      selector: row => row.p_status,
    },
    {
      name: 'More Details',
      selector: row => <Link to={`/shops/order/${row.id}`} className='py-3 px-5 bg-blue-800 text-white rounded-md'>View</Link>
    }
  ]

  const data = [
    {
      id:1,
      orderDate: "2024-01-01",
      fp_id: 5,
      total_amount: "1000",
      p_status: 1
    },
    {
      id:2,
      orderDate: "2024-01-22",
      fp_id: 4,
      total_amount: "1050",
      p_status: 2
    },
    {
      id:3,
      orderDate: "2024-01-16",
      fp_id: 9,
      total_amount: "10",
      p_status: 0
    },
  ]

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        fixedHeader
        pagination
      ></DataTable>
    </div>
  )
}

export default OrderTable
