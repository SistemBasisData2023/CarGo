import eyeOpen from "/eyeOpen.svg";
import eyeClosed from "/eyeClosed.svg";

const Register = () => {
  return (
    <div className="relative items-center justify-center">
      <img src={eyeOpen} alt="Cargo" className='h-600 w-400' />
      <img src={eyeClosed} className="h-600 w-400"/>
    </div>
  )
}

export default Register;