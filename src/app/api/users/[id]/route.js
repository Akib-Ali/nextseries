import { users } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = params.id
    const listing = users
    console.log("is listing", listing)
    const user = listing.filter((item) => item.id == id)
    console.log("is users", user)
    return NextResponse.json(user.length == 0 ? "no result found" : { result: user[0] }, { status: 200 })


}