import { api } from "../utils/axios";

type ContactsTypes = "phone" | "email" | "whats_up" | "registered_office";

interface ContactsResponse {
  contacts: {
    id: number;
    createdAt: string; //Date in ISO format
    updatedAt: string; //Date in ISO format
    type: ContactsTypes;
    value: string;
  }[];
  count: number;
}

//TODO: need to setup Redux or some other store manager ?
export async function fetchContacts(
  type: ContactsTypes
): Promise<XOR<{ value: string }, { error: string }>> {
  try {
    const { data } = await api.get<ContactsResponse>("/contacts", {
      params: {
        type,
      },
    });
    return { value: data.contacts[0].value };
  } catch (err) {
    return { error: `Failed to fetch ${type}` };
  }
}

export const formatPhone = (phone: string) => {
  return phone
    .replace(/\D/g, "") // Remove all non-numeric characters
    .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3-$4-$5"); // Format the phone number
};
