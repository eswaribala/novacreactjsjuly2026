import PrimeButton from '../../atoms/Button/Button.jsx';
import {LogIn, UserPlus} from 'lucide-react';
function AuthToggle({activeForm,onToggle}) {
 console.log('activeForm in AuthToggle:', activeForm);
 return(
    <div className="mb-8 flex items-center gap-4">
      <PrimeButton 
       id="login-toggle" 
       type="button"       
       className={`flex flex-row rounded-md px-4 py-3 font-semibold transition-transform ${activeForm === 'login' ? 'bg-blue-100' : 'bg-gray-50'}`}
       onClick={() => onToggle('login')} 
       >
       <LogIn className='inline-block mr-2' size={16} />
        <span className='inline-block'>Login</span>
      </PrimeButton>

      <PrimeButton 
       id="register-toggle" 
       type="button"    
       className={`flex flex-row rounded-md px-4 py-3 font-semibold transition-transform ${activeForm === 'register' ? 'bg-violet-100' : 'bg-gray-50'}`}
       onClick={() => onToggle('register')} 
       >
       <UserPlus className='inline-block mr-2' size={16} />
        <span className='inline-block'>Register</span>
      </PrimeButton>

    </div>

 )

}

export default AuthToggle;