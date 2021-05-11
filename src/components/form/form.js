import './form.css';

const Form = ({getWeather}) => {
    return(
        <form onSubmit={getWeather} className="d-flex row g-1">
            <div className="col-sm-10">
            <input type="text" name="city" placeholder="Enter a city" className="form-control"/>
            </div>
            <div class="col-sm-2">
            <button className="btn btn-info">Submit</button> 
            </div>
            
        </form>
    )
}

export default Form;