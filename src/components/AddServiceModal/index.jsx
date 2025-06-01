import React, { useState , useEffect} from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalField,
  Label,
  Input,
  CheckboxLabel,
  Checkbox,
  SubmitButton,
  ToggleTypeButtons,
  ToggleButton
} from "./AddServiceModal.styled";
import Select from "react-select";
import { format } from "date-fns";
import { getBosses } from '../../services/bossesApi.js';

export default function AddServiceModal({ onClose }) {
  const [isService, setIsService] = useState(true);

  const today = format(new Date(), "yyyy-MM-dd");

  const clientOptions = [
    { value: "client1", label: "Client 1" },
    { value: "client2", label: "Client 2" }
  ];
  const [bossOptions, setBossOptions] = useState([]);

  const [client, setClient] = useState(null);
  const [boss, setBoss] = useState(null);
  const [date, setDate] = useState(today);
  const [value, setValue] = useState("");
  const [killCount, setKillCount] = useState("");
  const [paymentType, setPaymentType] = useState({ value: "USD", label: "USD" });
  const [isTicket, setIsTicket] = useState(false);

  const [tipDate, setTipDate] = useState(today);
  const [tipClient, setTipClient] = useState(null);
  const [tipValue, setTipValue] = useState("");


  useEffect(() => {
  async function fetchBosses() {
    try {
      const response = await getBosses();
      const data = response.data;
      const options = data.map(boss => ({
      value: boss.id,
      label: boss.name
      }));
      setBossOptions(options);

    } catch (err) {
      console.error("Erro ao buscar bosses:", err);
    }
  }

  fetchBosses();
}, []);





  const submitService = () => {
    const data = {
      client: client?.value,
      boss: boss?.value,
      date,
      value: parseFloat(value),
      killCount: parseInt(killCount),
      paymentType: paymentType.value,
      ticket: isTicket
    };
    console.log("Sending service data:", data);

  };


  const submitTip = () => {
    const data = {
      client: tipClient?.value,
      date: tipDate,
      value: parseFloat(tipValue)
    };
    console.log("Sending tip data:", data);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isService ? submitService() : submitTip();
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Add {isService ? "Service" : "Tip"}</ModalTitle>
          <button onClick={onClose}>X</button>
        </ModalHeader>
        <form onSubmit={handleSubmit}>
          <ModalContent>
            <ToggleTypeButtons>
              <ToggleButton type="button" active={isService} onClick={() => setIsService(true)}>
                Service
              </ToggleButton>
              <ToggleButton type="button" active={!isService} onClick={() => setIsService(false)}>
                Tip
              </ToggleButton>
            </ToggleTypeButtons>

            {isService ? (
              <>
                <ModalField>
                  <Label>Client</Label>
                  <Select
                    options={clientOptions}
                    placeholder="Select client"
                    isSearchable
                    value={client}
                    onChange={setClient}
                  />
                </ModalField>

                <ModalField>
                  <Label>Boss</Label>
                  <Select
                    options={bossOptions}
                    placeholder="Select boss"
                    isSearchable
                    value={boss}
                    onChange={setBoss}
                  />
                </ModalField>

                <ModalField>
                  <Label>Service Date</Label>
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </ModalField>
                <ModalField >
                  <Label>Boss Kill Count</Label>
                    <Input
                      type="number"
                      value={killCount}
                      onChange={(e) => setKillCount(e.target.value)}
                    />
                </ModalField>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px"
                  }}
                >
                  <ModalField style={{ maxWidth: "130px" }}>
                    <Label>Value per KC</Label>
                    <Input
                      type="number"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </ModalField>

                  <ModalField style={{ width: "130px" }}>
                    <Label>Payment Type</Label>
                    <Select
                      options={[
                        { value: "USD", label: "USD" },
                        { value: "M", label: "M" }
                      ]}
                      value={paymentType}
                      onChange={setPaymentType}
                    />
                  </ModalField>

                  <ModalField style={{ justifyContent: "end" }}>
                    <CheckboxLabel style={{ marginBottom: "6px" }}>
                      <Checkbox
                        type="checkbox"
                        checked={isTicket}
                        onChange={(e) => setIsTicket(e.target.checked)}
                      />{" "}
                      Ticket
                    </CheckboxLabel>
                  </ModalField>
                </div>
              </>
            ) : (
              <>
                <ModalField>
                  <Label>Tip Date</Label>
                  <Input
                    type="date"
                    value={tipDate}
                    onChange={(e) => setTipDate(e.target.value)}
                  />
                </ModalField>

                <ModalField>
                  <Label>Client</Label>
                  <Select
                    options={clientOptions}
                    placeholder="Select client"
                    isSearchable
                    value={tipClient}
                    onChange={setTipClient}
                  />
                </ModalField>

                <ModalField>
                  <Label>Tip Value</Label>
                  <Input
                    type="number"
                    value={tipValue}
                    onChange={(e) => setTipValue(e.target.value)}
                    placeholder="Tip amount"
                  />
                </ModalField>
              </>
            )}

            <SubmitButton type="submit">Add</SubmitButton>
          </ModalContent>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
}
