import { useState, useEffect} from 'react';
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

    SubmitButton,
    ToggleTypeButtons,
    ToggleButton,
} from './AddServiceModal.styled';
import Select from 'react-select';
import { format } from 'date-fns';
import Checkbox from '../../components/Checkbox/Checkbox';
import { getBosses } from '../../services/bossesApi.js';
import { getClients } from '../../services/clientsApi.js';
import { createService } from '../../services/servicesApi.js';

export default function AddServiceModal({ onClose }) {
    const [isService, setIsService] = useState(true);

    const today = format(new Date(), 'yyyy-MM-dd');


    const [bossOptions, setBossOptions] = useState([]);
    const [clientOptions, setClientOptions] = useState([]);

    const [client, setClient] = useState({ value: 1, label: 'No Client' });
    const [boss, setBoss] = useState(null);
    const [date, setDate] = useState(today);
    const [value, setValue] = useState('');
    const [killCount, setKillCount] = useState('');
    const [paymentType, setPaymentType] = useState({ value: 'USD', label: 'USD' });
    const [isTicket, setIsTicket] = useState(true);

    const [tipDate, setTipDate] = useState(today);
    const [tipClient, setTipClient] = useState(null);
    const [tipValue, setTipValue] = useState('');


    useEffect(() => {
        async function fetchBosses() {
            try {
                const bossesResponse = await getBosses();
                const bossesOptions = bossesResponse.map(boss => ({
                    value: boss.id,
                    label: boss.name,
                }));
                setBossOptions(bossesOptions);

                const clientResponse = await getClients();
                const clientOptions = clientResponse.map(client => ({
                    value: client.id,
                    label: client.name,
                }));
                setClientOptions(clientOptions);

            } catch (err) {
                console.error('Erro ao buscar bosses:', err);
            }
        }

        fetchBosses();
    }, []);





    const submitService  = async () => {
        const data = {
            clientId: client?.value,
            bossId: boss?.value,
            serviceDate: new Date(date),
            value: parseFloat(value),
            killCount: parseInt(killCount),
            paymentType: paymentType.value,
            isTicket,
        };
        try{
            if (!data.clientId || !data.bossId || !data.serviceDate || !data.value || !data.killCount) {
                console.log(data);
                throw new Error('All fields are required');
            }
            const auth = localStorage.getItem('authToken');
            await createService(data, auth);
            onClose();

        } catch (error) {
            console.error('Error submitting service:', error);
            console.log('Data being sent:', data);
            alert('Please fill in all required fields.');
            return;
        };
    };

    const submitTip = () => {
        const data = {
            client: tipClient?.value,
            date: tipDate,
            value: parseFloat(tipValue),
        };
        console.log('Sending tip data:', data);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        isService ? submitService() : submitTip();
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalHeader>
                    <ModalTitle>Add {isService ? 'Service' : 'Tip'}</ModalTitle>
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
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: '20px',
                                    }}
                                >
                                    <ModalField style={{ maxWidth: '130px' }}>

                                        {isTicket ?
                                            <Label>Price per KC</Label>
                                            :
                                            <Label>Total (in M)</Label>}

                                        <Input
                                            type="number"
                                            value={value}
                                            placeholder={isTicket ? '0.35' : '92.75'}
                                            onChange={(e) => setValue(e.target.value)}
                                        />
                                    </ModalField>

                                    <ModalField style={{ width: '130px' }}>
                                        <Label>Payment Type</Label>
                                        <Select
                                            options={[
                                                { value: 'USD', label: 'USD' },
                                                { value: 'M', label: 'M' },
                                            ]}
                                            value={paymentType}
                                            onChange={setPaymentType}
                                        />
                                    </ModalField>

                                    <ModalField style={{ justifyContent: 'end' }}>
                                        <CheckboxLabel style={{ marginBottom: '8px' }}>
                                            <Checkbox
                                                isChecked={isTicket}
                                                onChange={(e) => setIsTicket(e.target.checked)}
                                            />
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
