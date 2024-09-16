import { useState } from 'react'
import style from './CreatePost.module.css'
import { userInsertDocument } from '../../hooks/userInsertDocument'
import {useAuthValue} from '../../context/AuthContext'

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [image, setIgame] = useState();
  const [body, setBody] = useState();
  const [tags, setTags] = useState();
  const [formError, setFormError] = useState();
  const {user} = userAuthValue();
    return (
        <>
        </>
  )
}

export default CreatePost