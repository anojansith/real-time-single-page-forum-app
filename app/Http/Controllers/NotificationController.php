<?php

namespace App\Http\Controllers;
use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;
use Auth;

class NotificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('JWT');
    }


    public function index(){
       $read = Auth::user()->readNotifications()->get();
       $unread = Auth::user()->unreadNotifications()->get();

       return [
           'read' => NotificationResource::collection($read),
           'unread' => NotificationResource::collection($unread),
       ];
   }

   public function markAsRead(Request $request)
   {
       Auth::user()->notifications->where('id', $request->id)->markAsRead();
   }
}
