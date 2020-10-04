import React, { useRef } from 'react'
import classnames from 'classnames/bind'
import PropTypes from 'prop-types'

// Components
import Icons from 'assets/icons'
import ErrorMessage from 'basicComponents/HookForm/components/ErrorMessage'

// Lib MISC

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

// PropTypes
export const propTypes = {
  accept: PropTypes.string,
  handleFiles: PropTypes.func,
  name: PropTypes.string,
}

// DefaultProps
export const defaultProps = {}

function Upload(props) {
  const { accept, handleFiles, name, ...restProps } = props

  const inputRef = useRef(null)

  return (
    <>
      <div className={cx('upload')} onClick={() => inputRef.current.click()}>
        <Icons.Add className={cx('upload-icon')} />
        <input
          ref={inputRef}
          className={cx('upload-input')}
          onChange={(event) => {
            const fileList = Object.values(event.target.files)

            handleFiles(fileList)
          }}
          type='file'
          accept={accept}
          {...restProps}
        />
      </div>
      <ErrorMessage name={name} />
    </>
  )
}

Upload.propTypes = propTypes
Upload.defaultProps = defaultProps

export default Upload
