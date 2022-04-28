import { Template } from '../../Components/Template/Template';
import { useAppSelector } from '../../Hooks/useRedux';

export const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);
  const {
    image,
    username,
    firstname,
    lastname,
    country,
    province,
    email,
    age,
    gender,
  } = user!;
  if (!user) return <></>;
  return (
    <Template
      Component={
        <div className='profile-body'>
          <h1>Profile</h1>
          <div className='contact-header-body'>
            <div className='contact-image'>
              <img src={image} alt='profile-pic' />
            </div>
            <div className='main-info-2'>
              <div className='contact-info'>
                <div>
                  <p>
                    Username: <span>{username}</span>
                  </p>
                  <p>
                    Firstname: <span>{firstname}</span>
                  </p>
                  <p>
                    Lastname: <span>{lastname}</span>
                  </p>
                  <p>
                    Email: <span>{email}</span>
                  </p>
                </div>
                <div className='location'>
                  <p>
                    Country: <span>{country.name}</span>
                  </p>
                  <p>
                    Province: <span>{province}</span>
                  </p>
                  <p>
                    Age: <span>{age}</span>
                  </p>
                  <p>
                    Gender: <span>{gender.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='change-profile-div'>
            <button className='change-profile-btn'>Change Profile</button>
            <button className='change-profile-btn'>Change Password</button>
          </div>
        </div>
      }
    />
  );
};
