import { users } from "@/util/db";
import { NextResponse,} from "next/server";

 export async function GET(request){
    const userlisting = users
    return NextResponse.json(userlisting , {status:200})

}