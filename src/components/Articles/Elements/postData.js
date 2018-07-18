import React from 'react';
import styles from '../articles.css';
import moment from 'moment';

const formateDate = (date) => {
    return moment(date).format(' DD/MM/YYYY ')
}

const postData = (props) => (
    <div className={styles.articlePostData}>
        <div>
            Date:
            <span>{formateDate(props.data.date)}</span>
        </div>
        <div>
            Author:
            <span>{props.data.author}</span>
        </div>
    </div>
)

export default postData;