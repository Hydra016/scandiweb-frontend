import React from 'react'

function Product({ item, checked, setChecked }) {

  const handleCheckBox = (e) => {
    if(e.target.checked) {
      return setChecked([...checked, item])
    } else {
      const newChecked = checked.filter(product => product.id !== item.id)
      setChecked(newChecked)
    }
  }  

  return (
    <div className='product'>
      <label class="container">
  <input onChange={handleCheckBox} type="checkbox"/>
  <svg viewBox="0 0 64 64" height="2em" width="2em">
    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
  </svg>
</label>
      {Object.values(item).slice(2).map(newItem => <p className='detail-text'>{newItem}</p>)}
    </div>
  )
}

export default Product