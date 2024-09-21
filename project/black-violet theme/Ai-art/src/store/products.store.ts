import { Category } from "../types/category.enum";
import { Image } from "../types/image.interface";
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals'
import { SortBy, SortDirection } from "../types/sortBy.enum";
export interface AppStates{
    products: Image[],
    search: string,
    page: number;
    pageSize: number;
    total: number;
    isLoading: boolean;
    sortBy: SortBy | undefined,
    sortDirection: SortDirection,
    categories: Category | undefined,
    artists: string[],
    selectedCategory: string | undefined;
    selectedArtist: string | undefined;
}

const defaultState: AppStates = {
    products: [],
    search: '',
    page: 0,
    pageSize: 12,
    total: 0,
    isLoading: false,
    sortBy: undefined,
    sortDirection: SortDirection.ASC,
    categories: undefined,
    artists: [],
    selectedArtist:undefined,
    selectedCategory:undefined
}

export const AppStore = signalStore(
    {providedIn: 'root'},
    withState(defaultState),
    withMethods((state)=>({
        setProducts: (products: Image[])=>{patchState(state, {products})},
        setSearch: (search: string)=>{patchState(state, {search, page:0})},
        setPage: (page: number)=>{patchState(state,{page})},
        setPageSize: (pageSize: number)=>{patchState(state, {pageSize})},
        setTotal: (total:number)=>{patchState(state, {total})},
        setIsLoading: (isLoading:boolean)=>{patchState(state, {isLoading})},
        setCategories: (categories: Category)=>{patchState(state, {categories})}, //moze nema da treba
        setArtists: (artists: string[])=>{patchState(state,{artists})},
        setSortBy: (sortBy: SortBy | undefined)=>{patchState(state,{sortBy})},
        setSortDirection: (sortDirection: SortDirection)=>{patchState(state, {sortDirection})},
        setSelectedCategory: (selectedCategory: string | undefined)=>{patchState(state, {selectedCategory})},
        setSelectedArtist: (selectedArtist: string | undefined)=>{patchState(state, {selectedArtist})},
        reset: ()=>{
            patchState(state,{
                page: 0,
                pageSize: 12,
                search: '',
                sortBy: undefined,
                sortDirection: SortDirection.ASC,
                selectedArtist: undefined,
                selectedCategory: undefined

            })
        }
    })),
    withHooks({
        onInit:(state)=> {
            state.reset()
        },
    })
)
