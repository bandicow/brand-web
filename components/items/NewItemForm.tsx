'use client'
import { FormEvent, useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

interface NewItemFormProps {
  onAddItem : (itemData : ItemData_notId) => void;
}

interface ItemData_notId {
  name: string;
  imageurl: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  createdAt: { $date: Date };
}


function NewItemForm(props: NewItemFormProps) {

  const nameInputRef = useRef<HTMLInputElement>(null);
  const imageurlInputRef = useRef<HTMLInputElement>(null); 
  const priceInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const categoryInputRef = useRef<HTMLInputElement>(null);
  const stockInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    const enteredName = nameInputRef.current!.value;
    const enteredImageurl = imageurlInputRef.current!.value;
    const enteredPrice = Number(priceInputRef.current?.value);
    const enteredDescription = descriptionInputRef.current!.value;
    const enteredCategory = categoryInputRef.current!.value;
    const enteredStock = Number(stockInputRef.current?.value);


    const itemData = {
      name: enteredName,
      imageurl: enteredImageurl,
      description: enteredDescription,
      price: enteredPrice,
      category:  enteredCategory,
      stock:  enteredStock,
      createdAt: {"$date": new Date()},
       };

    props.onAddItem(itemData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='Name'>제품명</label>
          <input type='text' required id='Name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='Category'>분류</label>
          <input type='text' required id='Category' ref={categoryInputRef} />
        </div>
        <div className={classes.control}>      
          <label htmlFor='Imageurl'>제품 사진</label>
          <input type='url' required id='Imageurl' ref={imageurlInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='Price'>가격</label>
          <input type='text' required id='Price' ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='Stock'>재고량</label>
          <input type='text' required id='Stock' ref={stockInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='Description'>제품 설명</label>
          <textarea
            id='Description'
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewItemForm;
