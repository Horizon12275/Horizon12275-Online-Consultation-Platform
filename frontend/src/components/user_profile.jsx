import { useAuth } from "../context/authContext";
import { Image, Input, Modal, Upload } from "antd";
import { addBalance } from "../services/clientService";
import { useState } from "react";
import { BASEURL } from "../services/requestService";

function Profile() {
  const { user, client, setClient, expert, setExpert } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (info) => {
    if (info.file.status === "done") {
      if (info.file.response.code === 200) {
        if (user?.role === "user")
          setClient({ ...client, avatar: info.file.response.data });
        else setExpert({ ...expert, avatar: info.file.response.data });
      } else alert(info.file.response.message);
    } else if (info.file.status === "error") {
    }
  };
  const handleFund = () => {
    const cdKey = document.getElementById("cd-key").value;
    const trueKeys = ["123456", "654321", "111111"];
    if (!trueKeys.includes(cdKey)) {
      alert("Invalid redeem code");
      return;
    }
    addBalance()
      .then((res) => {
        setClient({ ...client, balance: res.balance });
        alert("Add funds successfully!");
        document.getElementById("cd-key").value = "";
        setIsModalOpen(false);
      })
      .catch((e) => alert(e));
  };
  return (
    <>
      <div className="div" style={{ marginTop: "30px", marginLeft: "40px" }}>
        <div className="div-2 shadow-lg">
          <Image
            src={client?.avatar || expert?.avatar}
            className="aspect-square object-cover"
          />
        </div>
        <div className="div-3">{client?.username || expert?.name}</div>
        <div className="div-4">{client?.region || expert?.region}</div>
        <div className="div-5">
          <div className="div-6">
            <div className="div-7">
              {user?.tweetLikes.length + user?.commentLikes.length}
            </div>
            <div className="div-8">Likes</div>
          </div>
          <div className="div-9" />
          <div className="div-10">
            <div className="div-11">
              {user?.tweetComments.length +
                user?.articleComments.length +
                user?.expertComments.length}
            </div>
            <div className="div-12">Comments</div>
          </div>
          <div className="div-13" />
          <div className="div-14">
            <div className="div-15">{`$${client?.balance}`}</div>
            <div className="div-16">Balance</div>
          </div>
        </div>
        <div className="div-17">
          <Upload
            showUploadList={false}
            name="avatar"
            action={`${BASEURL}/api/user/avatar`}
            withCredentials
            onChange={handleChange}
            className="div-18 shadow-lg"
          >
            <span>Upload new avatar</span>
          </Upload>

          <button onClick={setIsModalOpen} className="div-19 shadow-lg">
            Add funds to wallet
          </button>
          <Modal
            title="Consultation Confirmation"
            open={isModalOpen}
            onOk={handleFund}
            onCancel={handleCancel}
          >
            <p>{`Please enter the redeem code to add funds to your wallet`}</p>
            <Input id="cd-key" placeholder="Redeem Code" />
          </Modal>
        </div>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          max-width: 749px;
          flex-direction: column;
          align-items: center;
          padding: 0 20px;
          position: absolute;
          top: 0px;
          left: 250px;
        }
        .div-2 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          border-color: rgba(21, 112, 239, 1);
          border-style: solid;
          border-width: 5px;
          border-radius: 50%;
          position: relative;
          display: flex;
          aspect-ratio: 1.02;
          width: 160px;
          max-width: 100%;
          justify-content: center;
        }
        .img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .img-2 {
          aspect-ratio: 1.02;
          object-fit: auto;
          object-position: center;
          width: 100%;
          border-color: rgba(21, 112, 239, 1);
          border-style: solid;
          border-width: 5px;
          border-radius: 50%;
        }
        .div-3 {
          color: #000;
          margin: 35px -5px 0 0;
          font: 400 40px Carter One, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-4 {
          color: #6c6c6c;
          margin-top: 10px;
          font: 700 35px Caveat, sans-serif;
        }
        .div-5 {
          display: flex;
          margin-top: 30px;
          align-items: flex-start;
          gap: 20px;
          white-space: nowrap;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-5 {
            flex-wrap: wrap;
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-6 {
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-6 {
            white-space: initial;
          }
        }
        .div-7 {
          color: #000;
          font: 400 37px Cardo, sans-serif;
        }
        .div-8 {
          color: #6c6c6c;
          margin-top: 22px;
          font: 700 28px Cardo, sans-serif;
        }
        .div-9 {
          background-color: #6c6c6c;
          align-self: start;
          width: 2px;
          height: 112px;
        }
        .div-10 {
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-10 {
            white-space: initial;
          }
        }
        .div-11 {
          color: #000;
          align-self: center;
          font: 400 37px Cardo, sans-serif;
        }
        .div-12 {
          color: #6c6c6c;
          margin-top: 21px;
          font: 700 30px Cardo, sans-serif;
        }
        .div-13 {
          background-color: #6c6c6c;
          align-self: start;
          width: 2px;
          height: 113px;
        }
        .div-14 {
          align-self: end;
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-14 {
            white-space: initial;
          }
        }
        .div-15 {
          color: #000;
          align-self: center;
          font: 400 37px Cardo, sans-serif;
        }
        .div-16 {
          color: #6c6c6c;
          margin-top: 19px;
          font: 700 30px Cardo, sans-serif;
        }
        .div-17 {
          align-self: stretch;
          display: flex;
          margin-top: 25px;
          width: 100%;
          gap: 20px;
          font-size: 24px;
          color: #fff;
          font-weight: 400;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-18 {
          font-family: Carter One, sans-serif;
          border-radius: 20px;
          background-color: rgba(46, 144, 250, 1);
          justify-content: center;
          flex-grow: 1;
          width: fit-content;
          padding: 16px 52px;
          cursor: pointer;
          font-size: 24px;
          color: #fff;
        }
        @media (max-width: 991px) {
          .div-18 {
            padding: 0 23px 0 20px;
          }
        }
        .div-19 {
          font-family: Carter One, sans-serif;
          border-radius: 20px;
          background-color: rgba(229, 62, 62, 1);
          align-items: start;
          justify-content: center;
          flex-grow: 1;
          width: fit-content;
          padding: 18px 52px;
          cursor: pointer;
          font-size: 24px;
          border: none;
          color: #fff;
        }
        @media (max-width: 991px) {
          .div-19 {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}
export default Profile;
