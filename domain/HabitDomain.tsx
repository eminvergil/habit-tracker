export interface IHabitDomain{
    createdAt: string
    endDate: string
    started: boolean
    name: string
    id: number
}

export class HabitDomain{
    get Id(): number {
        return this._Id;
    }

    set Id(value: number) {
        this._Id = value;
    }
    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }
    get Started(): boolean {
        return this._Started;
    }

    set Started(value: boolean) {
        this._Started = value;
    }
    get EndDate(): string {
        return this._EndDate;
    }

    set EndDate(value: string) {
        this._EndDate = value;
    }
    get CreatedAt(): string {
        return this._CreatedAt;
    }

    set CreatedAt(value: string) {
        this._CreatedAt = value;
    }
    constructor()
    constructor(habitDomain: IHabitDomain)
    constructor(habitDomain?: IHabitDomain) {
        this._CreatedAt = habitDomain?.createdAt ?? ""
        this._Started = habitDomain?.started ?? false
        this._EndDate = habitDomain?.endDate ?? ""
        this._Name = habitDomain?.name ?? ""
        this._Id = habitDomain?.id ?? 0
    }

    private _CreatedAt: string
    private _EndDate: string
    private _Started: boolean
    private _Name: string
    private _Id: number
}