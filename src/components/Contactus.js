import React from 'react'
import '../App.css'
import Button from './Button'

const Contactus = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center newone p-4">
    <div
      className="bg-white shadow-2xl h-[600px] w-[600px] mt-[30] flex flex-col items-center"
    >
      <h2 className="text-4xl py-4">Contact us</h2>
      <form action="/contactus" method="post">
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="name"
            className="form-control"
            style={{width: "500px", height: "60px"}}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            style={{width: "500px", height: "60px"}}
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
            placeholder="Enter Message"
          ></textarea>
        </div>
        <Button/>
      </form>
    </div>
  </div>
  )
}

export default Contactus
