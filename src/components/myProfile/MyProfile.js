import "./myProfile.css";

function MyProfile() {
  return (
    <div className="myProfile">
      <form>
        <h2>Edit Your Profile</h2>
        <div className="myProfile-user">
          <label>
            <span>First Name</span>
            <input type="text" placeholder="Xojiakbar" />
          </label>
          <label>
            <span>Last Name</span>
            <input type="text" placeholder="Abdumutalov" />
          </label>
          <label>
            <span>Email</span>
            <input type="text" placeholder="xoji2007@gmail.com" />
          </label>
          <label>
            <span>Address</span>
            <input type="text" placeholder="Uzbekistan, Namangan" />
          </label>
        </div>
        <div className="myProfile-password">
          <h3>Password Changes</h3>
          <input type="text" placeholder="Current Password" />
          <input type="text" placeholder="New Passowrd" />
          <input type="text" placeholder="Confirm Password" />
        </div>
        <div className="myProfile-btns">
          <button>Cancel</button>
          <button>Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default MyProfile;
