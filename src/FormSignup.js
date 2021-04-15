import UseForm from './UseForm'

const FormSignup = () => {
  const {values, handleChange, handleSubmit} = UseForm()
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get started with us today! Create your own account by filling out the information below</h1>
        <div classNmae="form-inputs">
          <label
            htmlFor="firstName"
            className="form-label">
            First Name
          </label>
          <input id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-input"
            value={values.firstName} 
            onChange={handleChange}/>
        </div>
        <div classNmae="form-inputs">
          <label
            htmlFor="lastName"
            className="form-label">
            Last Name
          </label>
          <input id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form-input" 
            value={values.lastName}
            onChange={handleChange}/>
        </div>
        <div classNmae="form-inputs">
          <label 
            htmlFor="email"
            className="form-label">
            Email Address
          </label>
          <input id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="form-input" 
            value={values.email}
            onChange={handleChange}/>

        </div>
        <div classNmae="form-inputs">
          <label 
            htmlFor="password"
            className="form-label">
            Password 
          </label>
          <input id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="form-input" 
            value={values.password}
            onChange={handleChange}/>

        </div>
        <div classNmae="form-inputs">
          <label 
            htmlFor="password2"
            className="form-label">
            Confrim Password 
          </label>
          <input id="password2"
            type="password"
            name="password2"
            placeholder="Confrim password"
            className="form-input" 
            value={values.password2}
            onChange={handleChange}/>

        </div>
        <button className="form-input-btn" type="submit">
          Submit
        </button>
        <span>
          Already have an account? Login <a href="/FormLogin">Here</a>
        </span>
      </form>
    </div>
  )
}

export default FormSignup
