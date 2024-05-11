import React, { useState } from "react";
import { Table, Button, Modal } from "antd";

const { Column } = Table;

const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    fieldOfExpertise: "Engineering",
    educationLevel: "Bachelor",
    professionalQualifications: "Professional Engineer",
    selfIntroduction: "I am a dedicated engineer with 10 years of experience.",
  },
  {
    key: "2",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    fieldOfExpertise: "Engineering",
    educationLevel: "Bachelor",
    professionalQualifications: "Professional Engineer",
    selfIntroduction: "I am a dedicated engineer with 10 years of experience.",
  },
  {
    key: "3",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    fieldOfExpertise: "Engineering",
    educationLevel: "Bachelor",
    professionalQualifications: "Professional Engineer",
    selfIntroduction: "I am a dedicated engineer with 10 years of experience.",
  },
  // Add more data as needed
];

const VerifyExpertPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);

  const handleAction = (expert, action) => {
    // Perform action here, e.g., approve or disapprove expert
    console.log(`Action ${action} performed for expert: `, expert);
    // Close modal after action
    setModalVisible(false);
  };

  return (
    <div>
      <Table dataSource={data}>
        <Column
          title="Expert First Name"
          dataIndex="firstName"
          key="firstName"
        />
        <Column title="Expert Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column
          title="Field of Expertise"
          dataIndex="fieldOfExpertise"
          key="fieldOfExpertise"
        />
        <Column
          title="Education Level"
          dataIndex="educationLevel"
          key="educationLevel"
        />
        <Column
          title="Professional Qualifications"
          dataIndex="professionalQualifications"
          key="professionalQualifications"
        />
        <Column
          title="Self-Introduction"
          dataIndex="selfIntroduction"
          key="selfIntroduction"
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Button
              onClick={() => {
                setModalVisible(true);
                setSelectedExpert(record);
              }}
            >
              Perform Action
            </Button>
          )}
        />
      </Table>
      <Modal
        title={`Action for ${
          selectedExpert
            ? selectedExpert.firstName + " " + selectedExpert.lastName
            : ""
        }`}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Button onClick={() => handleAction(selectedExpert, "approve")}>
          Approve
        </Button>
        <Button onClick={() => handleAction(selectedExpert, "disapprove")}>
          Disapprove
        </Button>
      </Modal>
    </div>
  );
};

export default VerifyExpertPage;
