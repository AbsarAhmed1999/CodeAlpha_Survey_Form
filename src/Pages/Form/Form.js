import { useEffect, useState } from "react";
import styles from "./form.module.css";
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const getEmployStatus = localStorage.getItem('EmploymentStatus');
  const getCovid = localStorage.getItem('covid');
  const getVaccine = localStorage.getItem('vaccine');
  const getDecision = localStorage.getItem('decision');
  const getName = localStorage.getItem('name');
  const getEmail = localStorage.getItem('email');

  const [EmploymentStatus,setEmploymentStatus] = useState(getEmployStatus || null);
  const [covid,setCovid] = useState(getCovid || null);
  const[vaccine , setVaccine] = useState(getVaccine || null);
  const[decision , setDecision] = useState(getDecision || null);
  const[email,setEmail]= useState(getEmail);
  const[name,setName] = useState(getName);

  
  useEffect(()=>{
     if(!getEmployStatus){
      localStorage.setItem('EmploymentStatus',EmploymentStatus)
     }
     if(!getCovid){
      localStorage.setItem('covid',covid);
     }
     if(!getVaccine){
      localStorage.setItem('vaccine',vaccine);
     }
     if(!getDecision){
      localStorage.setItem('decision',decision);
     }
     if(!getName){
      localStorage.setItem('name',name);
     }
     if(!getEmail){
      localStorage.setItem('email',email);
     }
  },[EmploymentStatus, getEmployStatus,covid,getCovid,vaccine,getVaccine,decision,getDecision
    , email, getEmail, name, getName]);

  const savingState = (e)=>{
    const value = e.target.value;
    setEmploymentStatus(value);
    localStorage.setItem('EmploymentStatus',value);
  }

  const handleCovid = (e)=>{
    const value = e.target.value;
    setCovid(value);
    localStorage.setItem('covid',value);
  }

  const handleVaccine = (e)=>{
    const value = e.target.value;
    setVaccine(value);
    localStorage.setItem('vaccine',value);
  }
    
  const handleDecision = (e)=>{
    const value = e.target.value;
    setDecision(value);
    localStorage.setItem('decision',value);
  }
  const navigate = useNavigate();
    const pageTwoHandler = ()=>{
      //The state object allows to pass data to the route
      // The data will be available in the location.state of routed component
        navigate('/page2');

        // This FormTwo is not rendering . rendering is missing
        // <Formtwo EmploymentStatus={getEmployStatus} covid={getCovid} vaccine={getVaccine} decision={getDecision}/>
    }

    const handleEmail = (e)=>{
    const value = e.target.value;
    setEmail(value)
    localStorage.setItem('email',value);
    }

    const handleName = (e)=>{
      const value = e.target.value;
      setName(value);
      localStorage.setItem('name',value);
    }
  return (
    <div className={styles.container}>
      <div className={styles.Wrapper}>
        <div className={styles.headerWrapper}>
          <h1>Survey Form</h1>
        </div>
        <div className={styles.bodyWrapper}>
        <div className={styles.nameEmail}>
        <span style={{display:'inline-block',marginBottom:'20px'}}>
        <label>Enter Your Name: </label>
        <input onChange={handleName} type="text" name="name" value={name}/>
        </span>
        <br/>
        <label>Enter Your Email: </label>
        <input onChange={handleEmail} type="email" name="email" value={email}/>
        </div>
          <div className={styles.item1Wrapper} onClick={savingState}>
            <h4>What is your Employment Status?</h4>
            <ul>
              <li>
                <input type="radio" name="Employment Status" value='Student' checked={EmploymentStatus === 'Student'} />
                <label>Student</label>
              </li>
              <li>
                <input type="radio" name="Employment Status" value='Employed' checked={EmploymentStatus === 'Employed'} />
                <label>Employed</label>
              </li>
              <li>
                <input type="radio" name="Employment Status" value='Self Employed' checked={EmploymentStatus === 'Self Employed'} />
                <label>Self Employed</label>
              </li>
              <li>
                <input type="radio" name="Employment Status" value='Unemployed' checked={EmploymentStatus === 'Unemployed'} />
                <label>UnEmployed</label>
              </li>
            </ul>
          </div>
          <div className={styles.item2Wrapper} onClick={handleCovid}>
            <h4>Are you planning to get covid vaccine ? </h4>
            <ul>
              <li>
                <input name="covid" type="radio" value='Yes' checked={covid === 'Yes'} />
                <label>Yes</label>
              </li>

              <li>
                <input name="covid" type="radio" value='No' checked={covid === 'No'} />
                <label>No</label>
              </li>

              <li>
                <input name="covid" type="radio" value='Not Sure' checked={covid === 'Not Sure'} />
                <label>Not Sure</label>
              </li>
            </ul>
          </div>
          <div className={styles.item3Wrapper} onClick={handleVaccine}>
            <h4>
              Which of following define your concerns about getting vaccine ?
            </h4>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="vaccine"
                  value='Vaccine side effects'
                  checked={vaccine === 'Vaccine side effects'}
                />
                <label>
                  I have concern about vaccine side effects , long term safety
                  and efficency
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="vaccine"
                  // value and checked properties must be same , its case sensitive 
                  value='I have Religious Reason'
                  checked={vaccine === 'I have Religious Reason'}
                />
                <label>I have religious reasons</label>
              </li>

              <li>
                <input
                  type="checkbox"
                  name="vaccine"
                  value='I dont believe in it'
                  checked={vaccine === 'I dont believe in it'}
                />
                <label>I dont believe in it </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="vaccine"
                  value='other'
                  checked={vaccine === 'other'}
                />

                <label>other </label>
              </li>
            </ul>
          </div>
          <div className={styles.item3Wrapper} onClick={handleDecision}>
            <h4>
              Which of following would be helpful if you did not decide yet ?{" "}
            </h4>
            <ul>
              <li>
                <input type="checkbox" name="Decision" value='If my doctor would approve' checked={decision === 'If my doctor would approve'}/>
                <label>If my doctor would approve </label>
              </li>
              <li>
                <input type="checkbox" name="Decision" value='If legal authorities would approve' checked={decision==='If legal authorities would approve'} />
                <label>If legal authorities would approve</label>
              </li>
              <li>
                <input type="checkbox" name="Decision" value='I want to wait for a period to observe' checked={decision=== 'I want to wiat for a period to observe'} />
                <label>I want to wait for a period to observe</label>
              </li>
              <li>
                <input type="checkbox" name="Decision" value='Other' checked={decision==='Other'} />
                <label>Other</label>
              </li>
            </ul>
          </div>
        </div>
        <button className={styles.pageTwo} onClick={pageTwoHandler}>page2</button>
      </div>
    </div>
  );
};

export default Form;
