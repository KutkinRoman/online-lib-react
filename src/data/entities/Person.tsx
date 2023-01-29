import {InterfaceBaseEntity} from "./BaseEntity";

export interface InterfacePerson extends InterfaceBaseEntity {

    firstName: string

    lastName: string

    middleName: string

    fullName: string
}