import "./Form.style.css"

export const Form = () => {
  return (
    <>
      <form>
        <input type="password" name="password" className="input" required />
      </form>
      <div className="wrap">
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
      </div>
    </>
  )
}
