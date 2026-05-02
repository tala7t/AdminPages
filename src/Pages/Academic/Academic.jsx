import './Academic.css';
import AcademicData from './AcademicData';
import Header from '../../Components/Header/Header';

function Academic (){
    return(
        <>
        <Header/>
        <div className="academic">
            <div className="academic-card">
                <h2>General information</h2>
                <div className='academic-list'>
                    {AcademicData[0].map((item, index) =>{
                        const Icons = item.icon;
                        return(
                            <div className='academic-box' key={index}>
                            <Icons className='icon'/>
                            <div className='data'>
                            <p>{item.label}: </p>
                            <h4>{item.value}</h4>
                            </div>
                        </div>
                        );
})}
                </div>
            </div>

            <div className='academic-card'>
                <h2>Registration information</h2>
                <div className='academic-list'>
                    {AcademicData[1].map((item, index) =>{
                        const Icons = item.icon;
                        return(
                            <div className='academic-box' key={index}>
                            <Icons className='icon'/>
                            <div className='data'>
                                <p>{item.label}: </p>
                                <h4>{item.value}</h4>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
        </>
    );
}
export default Academic;