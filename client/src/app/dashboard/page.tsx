"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const bookingData = [
  { name: "Mon", bookings: 40 },
  { name: "Tue", bookings: 30 },
  { name: "Wed", bookings: 20 },
  { name: "Thu", bookings: 27 },
  { name: "Fri", bookings: 18 },
  { name: "Sat", bookings: 23 },
  { name: "Sun", bookings: 34 },
]

const events = [
  { id: 1, title: "Summer Music Festival", date: "2023-07-15", status: "Upcoming", bookings: 1200, capacity: 2000 },
  { id: 2, title: "Tech Conference 2023", date: "2023-08-22", status: "Open", bookings: 800, capacity: 1500 },
  { id: 3, title: "Food & Wine Expo", date: "2023-09-10", status: "Draft", bookings: 0, capacity: 3000 },
  { id: 4, title: "Art Gallery Opening", date: "2023-06-30", status: "Completed", bookings: 500, capacity: 500 },
]

const recentBookings = [
  { id: 1, name: "Alice Johnson", event: "Summer Music Festival", time: "2 hours ago" },
  { id: 2, name: "Bob Smith", event: "Tech Conference 2023", time: "5 hours ago" },
  { id: 3, name: "Charlie Brown", event: "Summer Music Festival", time: "1 day ago" },
]

export default function OrganizerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-200">Organizer Dashboard</h1>
          <Button className="bg-white text-black rounded-md">Create New Event</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Events", value: "12", color: "bg-transparent" },
            { title: "Total Bookings", value: "2,500", color: "bg-transparent" },
            { title: "Revenue", value: "$45,678", color: "bg-transparent" },
            { title: "Avg. Attendance Rate", value: "87%", color: "bg-transparent" },
          ].map((stat, index) => (
            <Card key={index} className={`${stat.color} text-white`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Your Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 text-black bg-white rounded-lg shadow">
                    <div>
                      <h3 className="font-semibold text-lg">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          event.status === "Upcoming"
                            ? "default"
                            : event.status === "Open"
                              ? "secondary"
                              : event.status === "Draft"
                                ? "outline"
                                : "destructive"
                        }
                      >
                        {event.status}
                      </Badge>
                      <p className="text-sm mt-1">
                        {event.bookings}/{event.capacity} booked
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${booking.name}`} />
                      <AvatarFallback>
                        {booking.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{booking.name}</p>
                      <p className="text-xs text-gray-500">{booking.event}</p>
                    </div>
                    <div className="ml-auto text-xs text-gray-500">{booking.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Booking Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bookingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bookings" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

  