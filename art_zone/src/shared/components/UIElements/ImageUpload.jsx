import React from 'react'

const ImageUpload = (props) => {
  return (
    <div className="mb-5">
    <label className=" font-title font-bold">Product Image URL:</label>
    <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="file"
      accept='.jpg,.png,.jpeg'
      onChange={handleImageUpload}
      required
    />
  </div>
  )
}

export default ImageUpload
