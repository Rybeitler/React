import React from 'react'
import styles from './CmpStyle.module.css'
import SubContents from './SubContents'
import Advertisement from './Advertisement'

const Main = (props)=>{
    return(
        <div className={styles.main}>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </div>
    )
}

export default Main