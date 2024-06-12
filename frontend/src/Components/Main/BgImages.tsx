import Pill from '../../assets/images/pilla.png';
import Doctor from '../../assets/images/Doctor.png';

const BgImages = () => {
    return (
        <div>
            <img src={Pill} className='w-12 absolute blur-[0.7px] hidden md:block rotate-12 right-[10%] top-[22%] lg:right-[7%] lg:top-[30%]' alt="" />
            <img src={Doctor} alt="" className='w-20 blur-[0.7px] hidden md:block absolute bottom-[20%] left-[7%]' />
        </div>
    )
}

export default BgImages
