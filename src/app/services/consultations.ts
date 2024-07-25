import { api } from "../utils/axios";
import { BaseEntity } from "./base";

export interface Consultation extends BaseEntity {
  clientPhone: string;
}

export const postConsultation = async (phone: string) => {
  const { data } = await api.post<{ consultation: Consultation }>(
    "/consultations",
    {
      clientPhone: phone
    }
  );
  return data.consultation;
};
