import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Row, Image } from "antd";
import {
  approveApplication,
  deleteApplication,
  getApplications,
} from "../services/applyService";

const { Column } = Table;

const VerifyExpertPage = () => {
  const [selected, setSelected] = useState([]);
  const [applications, setApplications] = useState([]);
  const handleDeleteItem = async (id) => {
    await deleteApplication(id)
      .then((res) => {
        setApplications(applications.filter((item) => item.id !== id));
        setSelected(selected.filter((item) => item !== id));
        alert("Deleted Successfully");
      })
      .catch((e) => alert(e));
  };
  const handleDeleteItems = async () => {
    selected.forEach(async (id) => {
      await deleteApplication(id)
        .then((res) => {
          setApplications(applications.filter((item) => item.id !== id));
          setSelected(selected.filter((item) => item !== id));
        })
        .catch((e) => alert(e));
    });
    alert("Deleted Successfully");
  };
  const handleApproveItems = async () => {
    selected.forEach(async (id) => {
      await approveApplication(id)
        .then((res) => {
          setApplications(applications.filter((item) => item.id !== id));
          setSelected(selected.filter((item) => item !== id));
        })
        .catch((e) => alert(e));
    });
    alert("Approved Successfully");
  };
  const handleApproveItem = async (id) => {
    await approveApplication(id)
      .then((res) => {
        setApplications(applications.filter((item) => item.id !== id));
        setSelected(selectedItems.filter((item) => item !== id));
        alert("Approved Successfully");
      })
      .catch((e) => alert(e));
  };
  useEffect(() => {
    getApplications().then((res) => {
      setApplications(res);
    });
    console.log(applications);
  }, []);

  return (
    <div>
      <Table
        dataSource={applications.map((item) => ({
          ...item,
          key: item.id,
        }))}
        rowSelection={{
          onChange: (_, selectedItems) => {
            setSelected(selectedItems.map((item) => item.id));
          },
        }}
      >
        <Column
          title="Expert First Name"
          dataIndex="firstName"
          key="firstName"
        />
        <Column title="Expert Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column
          title="Field of Expertise"
          dataIndex="field"
          key="fieldOfExpertise"
          render={(field) => {
            const items = JSON.parse(field);
            console.log(items);
            return (
              <Row>
                {items.map((item) => (
                  <p key={item.id} style={{ margin: 5 }}>
                    {`${item.content}`}
                  </p>
                ))}
              </Row>
            );
          }}
        />
        <Column
          title="Education Level"
          dataIndex="education"
          key="educationLevel"
        />
        <Column
          title="Professional Qualifications"
          dataIndex="image"
          key="professionalQualifications"
          render={(image) => {
            return (
              <Image
                src={image}
                height={100}
                alt="Professional Qualifications"
                className=" object-cover"
              />
            );
          }}
        />
        <Column
          title="Self-Introduction"
          dataIndex="selfIntroduction"
          key="selfIntroduction"
        />
        <Column
          title="Action"
          key="action"
          render={(item) => (
            console.log(item),
            console.log(selected),
            (
              <Row>
                <Button
                  disabled={!selected.includes(item.id)}
                  onClick={() => {
                    handleDeleteItem(item.id);
                  }}
                >
                  Disapprove
                </Button>
                <Button
                  disabled={!selected.includes(item.id)}
                  type="primary"
                  onClick={() => {
                    handleApproveItem(item.id);
                  }}
                >
                  Approve
                </Button>
              </Row>
            )
          )}
        />
      </Table>
      <Row justify={"end"}>
        <Button
          disabled={!selected.length}
          type="primary"
          onClick={handleApproveItems}
        >
          Approve Selected
        </Button>
        <Button disabled={!selected.length} onClick={handleDeleteItems}>
          Disapprove Selected
        </Button>
      </Row>
    </div>
  );
};

export default VerifyExpertPage;