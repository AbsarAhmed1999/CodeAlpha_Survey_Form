import { useNavigate,useLocation } from 'react-router-dom';
import formtwoStyles from './Formtwo.module.css'
import { useEffect, useState, useRef} from 'react';
import { sendForm } from '@emailjs/browser';
const Formtwo = (props)=>{
    // const location = useLocation();
    // const {EmploymentStatus,covid,vaccine,decision,name,email} = location.state;

    // console.log(EmploymentStatus,covid,vaccine,decision,name,email);

    const getEmployStatus = localStorage.getItem('EmploymentStatus');
  const getCovid = localStorage.getItem('covid');
  const getVaccine = localStorage.getItem('vaccine');
  const getDecision = localStorage.getItem('decision');
  const getName = localStorage.getItem('name');
  const getEmail = localStorage.getItem('email');


    const getEducation = localStorage.getItem('coronaEducation');
    const getParent = localStorage.getItem('parent');
    const getDisease = localStorage.getItem('Disease');
    const getExposure = localStorage.getItem('exposure');

    const [coronaEducation,setCoronaEducation] = useState(getEducation||null);
    const [parent,setParent] = useState(getParent||null);
    const [disease , setDisease] = useState(getDisease||null);
    const [exposure, setExposure] = useState(getExposure||null);

    useEffect(()=>{
      if(!getEducation){
        localStorage.setItem('coronaEducation',coronaEducation);
      }
      if(!getParent){
        localStorage.setItem('parent',parent);
      }
      if(!getDisease){
        localStorage.setItem('Disease',disease);
      }
      if(!getExposure){
        localStorage.setItem('exposure',exposure);
      }

    },[coronaEducation, parent, disease, exposure, getEducation, getParent, getDisease, getExposure]);


    const navigate = useNavigate();
    const handleGoBack = ()=>{
        navigate('/')
    }

    const handleDisease = (e)=>{
      const value = e.target.value;
      setDisease(value);
      localStorage.setItem('Disease',value);
    }

    const handleCoronaEducation = (e)=>{
      const value = e.target.value;
      setCoronaEducation(value);
      localStorage.setItem('coronaEducation',value);
    }

    const handleParents = (e)=>{
      const value = e.target.value;
      setParent(value);
      localStorage.setItem('parent',value);
    }

    const handleExposure = (e)=>{
      const value = e.target.value;
      setExposure(value);
      localStorage.setItem('exposure',value);
    }

    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current);


      sendForm('service_m8cei1t', 'template_501vi8q', form.current, 'rnfwupyDEcPnhHTc3')
        .then((result) => {
            console.log(result.text);
            setCoronaEducation(null)
            setParent(null)
            setDisease(null)
            setExposure(null)
        }, (error) => {
            console.log(error.text);
        });
    };
    

   
    return(
      <form ref={form}>
        <div className={formtwoStyles.container}>
      <div className={formtwoStyles.Wrapper}>
        <div className={formtwoStyles.headerWrapper}>
          <h1>Survey Form Page 2</h1>
        </div>
        <div className={formtwoStyles.bodyWrapper}>
        <div style={{display:'none'}}>
        <input type='radio' name='Employment Status' value={getEmployStatus} checked/>
        
        <input type='radio' name='covid' value={getCovid} checked/>
        
        <input type='checkbox' name='vaccine' value={getVaccine} checked/>
        
        <input type='checkbox' name='Decision' value={getDecision} checked/>
        
        <input type='text' name='name' value={getName}/>
        
        <input type='email' name='email' value={getEmail}/>
        </div>
        <button className={formtwoStyles.goBack} onClick={handleGoBack}>Go Back</button>
          <div className={formtwoStyles.item1Wrapper} onClick={handleCoronaEducation}>
            <h4>What is the Highest level of Education?</h4>
            <ul>
              <li>
                <input type="radio" name="Education" value='Middle School' checked={coronaEducation === 'Middle School'} />
                <label>Middle School</label>
              </li>
              <li>
                <input type="radio" name="Education" value='1-3 years of college' checked={coronaEducation === '1-3 years of college'} />
                <label>1-3 Years of College</label>
              </li>
              <li>
                <input type="radio" name="Education" value='Completed Graduate School' checked={coronaEducation === 'Completed Graduate School'} />
                <label>Completed Graduate School</label>
              </li>
              <li>
                <input type="radio" name="Education" value='High School' checked={coronaEducation === 'High School'} />
                <label>High School</label>
              </li>
              <li>
                <input type="radio" name="Education" value='Graduated From College' checked={coronaEducation === 'Graduated From College'} />
                <label>Graduated From College</label>
              </li>
            </ul>
          </div>
          <div className={formtwoStyles.item2Wrapper} onClick={handleParents}>
            <h4>Do you have parents living with you at home ? </h4>
            <ul>
              <li>
                <input name="parent" type="radio" value='Yes' checked={parent === 'Yes'} />
                <label>Yes</label>
              </li>

              <li>
                <input name="parent" type="radio" value='No' checked={parent === 'No'} />
                <label>No</label>
              </li>
            </ul>
          </div>
          <div className={formtwoStyles.item3Wrapper} onClick={handleDisease}>
            <h4>
             Select All that Apply to you?{" "}
            </h4>
               <span>
                <input
                  type="checkbox"
                  name="Disease"
                  data-test-id="1"
                  value='Chronic Heart Disease'
                  checked={disease === 'Chronic Heart disease'}
                />
                <label>
                  Chronic heart disease
                </label>
                </span>
                <span>
                <input
                  type="checkbox"
                  name="Disease"
                  data-test-id="2"
                  value='Chronic Lung Disease'
                  checked={disease === 'Chronic Lung Disease'}
                />
                <label>Chronic Lung Disease</label>
                </span>
                <br/>
                <span >
                <input
                  type="checkbox"
                  name="Disease"
                  data-test-id="3"
                  value='Chronic Kidney Disease'
                  checked={disease === 'Chronic Kidney Disease'}

                />
                <label>Chronic Kidney Disease</label>
                </span>
                <span>
                <input
                  type="checkbox"
                  name="Disease"
                  data-test-id="4"
                  value='Diabetes'
                  checked={disease === 'Diabetes'}
                />
                <label>Diabetes </label>
                </span>
                <br/>
                <span>
                <input
                  type="checkbox"
                  name="Disease"
                  data-test-id="4"
                  value='High Colestrol'
                  checked={disease === 'High Colestrol'}
                />
                <label>High Colestrol</label>
                </span>
                <span>
                <input
                  type="checkbox"
                  name="Disease"
                  data-test-id="4"
                  value='Inflammatory bowel disease'
                  checked={disease === 'Inflammatory bowel disease'}
                  
                />
                <label>Inflammatory bowel disease </label>
                <br/>
                </span>
                <span>
                <input
                  type="checkbox"
                  name="Disease"
                  data-test-id="4"
                  value='None of these'
                  checked={disease === 'None of these'}
                />
                <label>None of these </label>
                </span>
                <span>
                <input
                  type="checkbox"
                  name="Disease"
                  data-test-id="4"
                  value='Other'
                  checked={disease === 'Other'}
                />
                <label>Other </label>
                </span>
          </div>
          <div className={formtwoStyles.item3Wrapper} onClick={handleExposure}>
            <h4>
              Have you had any exposure to a Covid-19 infected person ?{" "}
            </h4>
            <ul>
              <li>
                <input type="radio" name='Covidexposure' value='Yes' 
                  checked={exposure === 'Yes'} />
                <label>Yes </label>
              </li>
              <li>
                <input type="radio" name='Covidexposure' value='No' checked={exposure === 'No'}  />
                <label>No</label>
              </li>
              <li>
                <input type="radio" name='Covidexposure' value='Dont Know' checked={exposure === 'Dont Know'} />
                <label>Dont know</label>
              </li>
            </ul>
          </div>
        </div>
        <button onClick={sendEmail} className={formtwoStyles.item5Wrapper}>Submit</button>
      </div>
    </div>
    </form>
    )
}

export default Formtwo;