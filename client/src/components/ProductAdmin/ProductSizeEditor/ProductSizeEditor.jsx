import { FieldArray } from 'formik'
import Input from '../../Input/Input'
import { CLOTHING_SIZES, SHOE_SIZES } from '../../../utils/productSizes'
import classes from './ProductSizeEditor.module.scss'

const ProductSizeEditor = ({ values, setFieldValue }) => {
  const hasSizes = Boolean(values.hasSizes)

  const applyPreset = names => {
    setFieldValue('hasSizes', true)
    const current = values.sizes || []
    const qtyByName = Object.fromEntries(
      current.map(row => [
        String(row.name || '').trim(),
        Number(row.quantity || 0)
      ])
    )
    setFieldValue(
      'sizes',
      names.map(name => ({ name, quantity: qtyByName[name] || 0 }))
    )
  }

  return (
    <div className={classes.wrap}>
      <label className={classes.toggle}>
        <input
          type='checkbox'
          checked={hasSizes}
          onChange={e => {
            const next = e.target.checked
            setFieldValue('hasSizes', next)
            if (next && !(values.sizes && values.sizes.length)) {
              setFieldValue('sizes', [{ name: '', quantity: 0 }])
            }
            if (!next) {
              setFieldValue('sizes', [])
            }
          }}
        />
        This product has sizes
      </label>
      {hasSizes && (
        <>
          <div className={classes.presets}>
            <button
              type='button'
              className={classes.preset}
              onClick={() => applyPreset(CLOTHING_SIZES)}
            >
              Clothing XS–XXL
            </button>
            <button
              type='button'
              className={classes.preset}
              onClick={() => applyPreset(SHOE_SIZES)}
            >
              Shoes 36–45
            </button>
          </div>
          <FieldArray
            name='sizes'
            render={arrayHelpers => (
              <div className={classes.list}>
                {(values.sizes || []).map((row, index) => (
                  <div key={index} className={classes.row}>
                    <Input
                      name={`sizes[${index}].name`}
                      type='text'
                      placeholder='size'
                    />
                    <Input
                      name={`sizes[${index}].quantity`}
                      type='text'
                      placeholder='stock'
                    />
                    <button
                      type='button'
                      className={classes.remove}
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      remove
                    </button>
                  </div>
                ))}
                <button
                  type='button'
                  className={classes.preset}
                  onClick={() =>
                    arrayHelpers.push({ name: '', quantity: 0 })
                  }
                >
                  add size
                </button>
              </div>
            )}
          />
        </>
      )}
    </div>
  )
}

export default ProductSizeEditor
