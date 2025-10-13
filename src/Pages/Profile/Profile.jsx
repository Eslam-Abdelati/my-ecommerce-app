import React from "react";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function Profile() {
  return (
    <section className="w-full py-10">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <ProfileMenu />
        </div>
        <div className="col2 w-[60%]">
          <div className="card p-4 bg-white shadow-md rounded-md ">
            <h2 className="font-[600] pb-3">My Profile</h2>
            <hr />

            <form className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="col">
                  <TextField
                    type="text"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="col">
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="col">
                  <TextField
                    type="text"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button className="btn-org btn-lg w-[130px]">SAVE</Button>
                <Button className="btn-border w-[130px]">CANCEL</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
