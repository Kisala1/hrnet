import { MainLayout } from '../components/MainLayout/MainLayout';
import { Form } from '../components/Form/Form';
const textInputs = ['First Name', 'Last Name'];
const dateInputs = ['Date of Birth', 'Start Date'];
const adressInputs = ['Street', 'City'];

export function CreateEmployee() {
  return (
    <>
      <MainLayout viewEmployees={false}>
        <Form
          textInputs={textInputs}
          dateInputs={dateInputs}
          adressInputs={adressInputs}
        />
      </MainLayout>
    </>
  );
}
