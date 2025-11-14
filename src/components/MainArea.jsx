import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Calendar,
  Filter,
  ArrowDownUp,
  Columns,
  Upload,
  ChevronLeft,
  ChevronRight,
  RectangleEllipsis,
  Search,
} from 'lucide-react';

export default function MainArea() {
  const [query, setQuery] = useState('');
  const [filterTitle, setFilterTitle] = useState('Any');
  const [location, setLocation] = useState('Any');
  const [sellingMode, setSellingMode] = useState('Any');
  const [status, setStatus] = useState('Any');

  const data = [
    {
      id: 3,
      seller: 'sdvfa vfv ydfglwe',
      price: '₦1,000',
      location: 'Egbeda',
      mode: 'P. Protection, D. Contact',
      title: 'Used Iphone 12',
      date: '12th Oct. 2025',
      status: 'Pending',
    },
    {
      id: 556,
      seller: 'asdv sf',
      price: '₦1,000',
      location: 'Egbeda',
      mode: 'P. Protection, D. Contact',
      title: 'New Fan Bosch',
      date: '12th Oct. 2025',
      status: 'Pending',
    },
    {
      id: 88,
      seller: 'Jude ehstnzhd',
      price: '₦1,000',
      location: 'Egbeda',
      mode: 'Payment Protection',
      title: 'Fairly Used phone',
      date: '12th Oct. 2025',
      status: 'Pending',
    },
    {
      id: 89,
      seller: 'v svs<v',
      price: '₦1,000',
      location: 'Egbeda',
      mode: 'P. Protection, D. Contact',
      title: 'Car Tyres',
      date: '12th Oct. 2025',
      status: 'Pending',
    },
    {
      id: 8,
      seller: 'v svs<v',
      price: '₦1,000',
      location: 'Egbeda',
      mode: 'Direct Contact',
      title: 'Children’s Cloth',
      date: '12th Oct. 2025',
      status: 'Pending',
    },
    {
      id: 9,
      seller: 'reahbrg',
      price: '₦1,000',
      location: 'Egbeda',
      mode: 'P. Protection, D. Contact',
      title: 'Used Curtains',
      date: '12th Oct. 2025',
      status: 'Pending',
    },
    {
      id: 97,
      seller: 'estdgn h',
      price: '₦1,000',
      location: 'Egbeda',
      mode: 'Payment Protection',
      title: 'Used Fridge',
      date: '12th Oct. 2025',
      status: 'Pending',
    },
    {
      id: 4,
      seller: 'stghgfj',
      price: '₦1,000',
      location: 'Egbeda',
      mode: 'Payment Protection',
      title: 'New Freezer',
      date: '12th Oct. 2025',
      status: 'Pending',
    },
    {
      id: 76,
      seller: 'srtgfx',
      price: '₦1,000',
      location: 'Egbeda',
      mode: 'Payment Protection',
      title: 'New Iphone XR',
      date: '12th Oct. 2025',
      status: 'Pending',
    },
    {
      id: 78,
      seller: 'sdtbrgf',
      price: '₦1,000',
      location: 'Egbeda',
      mode: 'Direct Contact',
      title: 'New Watch',
      date: '12th Oct. 2025',
      status: 'Pending',
    },
  ];

  const filtered = useMemo(() => {
    return data.filter((r) => {
      if (
        query &&
        !`${r.title} ${r.seller}`.toLowerCase().includes(query.toLowerCase())
      )
        return false;
      if (filterTitle !== 'Any' && r.title !== filterTitle) return false;
      if (location !== 'Any' && r.location !== location) return false;
      if (sellingMode !== 'Any' && !r.mode.includes(sellingMode)) return false;
      if (status !== 'Any' && r.status !== status) return false;
      return true;
    });
  }, [query, filterTitle, location, sellingMode, status]);

  return (
    <div className='pt-15 px-12 bg-[#fafafa]'>
      <div className='flex items-center justify-between mb-5'>
        <h1 className='text-[23px] font-semibold'>Marketplace</h1>
        <div className='flex items-center gap-2 text-lg cursor-pointer'>
          <Upload size={20} /> Export
        </div>
      </div>

      <div className='bg-white border-2 border-gray-100 p-8 rounded-lg'>
        {/* Overview */}
        <h1 className='text-lg font-semibold'>Overview</h1>
        <div className='flex justify-between border-b pb-5 pt-3'>
          {[
            { label: 'Total created', value: 107 },
            { label: 'Total active', value: 70 },
            { label: 'Total Sold with Payment Protection', value: 27 },
            { label: 'Total Sold w/o Payment Protection', value: 10 },
          ].map((item) => (
            <div key={item.label} className='border-l pl-5'>
              <p className='text-sm text-gray-500'>{item.label}</p>
              <h3 className='text-lg font-semibold mt-1'>{item.value}</h3>
            </div>
          ))}
        </div>

        {/* Search & controls */}
        <div>
          <div className='flex items-center justify-between py-7'>
            <div className='flex items-center w-1/4 relative'>
              <Search
                className='absolute h-5 w-5 left-3 text-gray-700'
                strokeWidth={3}
              />
              <Input
                placeholder='Search assets'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='pl-11 py-6'
              />
            </div>

            <div className='flex items-center gap-8 text-sm'>
              <button className='flex items-center text-[16px] font-medium cursor-pointer'>
                Reset
              </button>
              <button className='flex items-center gap-2 text-[16px] font-medium cursor-pointer'>
                <ArrowDownUp size={25} /> Sort
              </button>
              <button className='flex items-center gap-2 text-[16px] font-medium cursor-pointer'>
                <Filter size={25} /> Advanced filter
              </button>
              <button className='flex items-center gap-2 text-[16px] font-medium cursor-pointer'>
                <Columns size={25} /> Select Columns
              </button>
              <button className='flex items-center gap-2 text-[16px] font-medium cursor-pointer border px-3 py-2 rounded-lg'>
                <Calendar size={25} /> Date
              </button>
            </div>
          </div>

          {/* Advanced Filter */}
          <div className='p-6 border bg-[#fbfcfe] rounded-lg mb-10'>
            <h3 className='text-lg font-bold mb-4'>Advanced filter</h3>

            <div className='flex items-center justify-center w-full gap-4'>
              <div className='flex-1'>
                <label className='text-sm font-medium text-gray-700'>
                  Item Title
                </label>
                <Select onValueChange={setFilterTitle}>
                  <SelectTrigger className='mt-2.5 w-full py-6'>
                    <SelectValue placeholder='Any' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Any'>Any</SelectItem>
                    <SelectItem value='Used Iphone 12'>
                      Used Iphone 12
                    </SelectItem>
                    <SelectItem value='New Fan Bosch'>New Fan Bosch</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='flex-1 rounded'>
                <label className='text-sm font-medium text-gray-700'>
                  Location
                </label>
                <Select onValueChange={setLocation}>
                  <SelectTrigger className='mt-2.5 w-full py-6'>
                    <SelectValue placeholder='Any' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Any'>Any</SelectItem>
                    <SelectItem value='Egbeda'>Egbeda</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='flex-1 rounded'>
                <label className='text-sm font-medium text-gray-700'>
                  Ad Selling Mode
                </label>
                <Select onValueChange={setSellingMode}>
                  <SelectTrigger className='mt-2.5 w-full py-6'>
                    <SelectValue placeholder='Any' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Any'>Any</SelectItem>
                    <SelectItem value='Payment Protection'>
                      Payment Protection
                    </SelectItem>
                    <SelectItem value='Direct Contact'>
                      Direct Contact
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='flex-1 rounded'>
                <label className='text-sm font-medium text-gray-700'>
                  Status
                </label>
                <Select onValueChange={setStatus}>
                  <SelectTrigger className='mt-2.5 w-full py-6'>
                    <SelectValue placeholder='Any' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Any'>Any</SelectItem>
                    <SelectItem value='Pending'>Pending</SelectItem>
                    <SelectItem value='Active'>Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='flex items-center justify-between w-full gap-4 mt-4'>
              {/* Price Range */}
              <div className='flex flex-col flex-1'>
                <label className='text-sm font-semibold text-gray-700 mb-2.5'>
                  Price Range
                </label>
                <div className='flex gap-3'>
                  <Input
                    type='number'
                    placeholder='From: Minimum Amount'
                    className='w-full placeholder:text-gray-400 py-6'
                  />
                  <Input
                    type='number'
                    placeholder='To: Maximum Amount'
                    className='w-full placeholder:text-gray-400 py-6'
                  />
                </div>
              </div>

              {/* Creation Date Range */}
              <div className='flex flex-col flex-1'>
                <label className='text-sm font-semibold text-gray-700 mb-2.5'>
                  Creation Date Range
                </label>
                <div className='flex gap-3'>
                  <Input
                    type='date'
                    placeholder='From dd/mm/yyyy'
                    className='w-full py-6 text-gray-700 scheme-light 
  [&::-webkit-datetime-edit]:text-gray-400 
  [&::-webkit-datetime-edit-fields-wrapper]:text-gray-400 
  [&::-webkit-input-placeholder]:text-gray-400
  [&::-webkit-calendar-picker-indicator]:w-6
  [&::-webkit-calendar-picker-indicator]:h-6
  '
                  />

                  <Input
                    type='date'
                    placeholder='To dd/mm/yyyy'
                    className='w-full py-6 text-gray-700 scheme-light 
  [&::-webkit-datetime-edit]:text-gray-400 
  [&::-webkit-datetime-edit-fields-wrapper]:text-gray-400 
  [&::-webkit-input-placeholder]:text-gray-400
  [&::-webkit-calendar-picker-indicator]:w-6
  [&::-webkit-calendar-picker-indicator]:h-6
  '
                  />
                </div>
              </div>
            </div>

            <div className='flex gap-3 mt-6'>
              <Button variant='outline' className='px-2.5 py-5 cursor-pointer'>
                Reset
              </Button>
              <Button className='bg-[#f97316] hover:bg-[#ea580c] text-white px-2.5 py-5 cursor-pointer'>
                Apply filter
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className='w-full'>
            {/* HEADER */}
            <div className='w-full flex items-center text-[16px] font-medium text-[#8f97a2]'>
              <div className='w-10 p-4 flex justify-center'>
                <Checkbox className='scale-125' />
              </div>

              <div className='flex-1 p-4'>Ad ID</div>
              <div className='flex-1 p-4'>Seller Name</div>
              <div className='flex-1 p-4'>Asking Price</div>
              <div className='flex-1 p-4'>Item Location</div>
              <div className='flex-1 p-4'>Selling Mode</div>
              <div className='flex-1 p-4'>Ad Title</div>
              <div className='flex-1 p-4'>Creation Date</div>
              <div className='flex-1 p-4'>Status</div>

              <div className='w-28 p-4'>Actions</div>
            </div>

            {/* ROWS */}
            {data.map((r) => (
              <div
                key={r.id}
                className='w-full flex items-center bg-[#f9f9fa] mt-5 mb-8 font-medium rounded-xl'
              >
                {/* Checkbox */}
                <div className='w-10 p-4 flex justify-center'>
                  <Checkbox className='scale-125' />
                </div>

                <div className='flex-1 p-4'>{r.id}</div>
                <div className='flex-1 p-4'>{r.seller}</div>
                <div className='flex-1 p-4'>{r.price}</div>
                <div className='flex-1 p-4'>{r.location}</div>
                <div className='flex-1 p-4'>{r.mode}</div>
                <div className='flex-1 p-4'>{r.title}</div>
                <div className='flex-1 p-4'>{r.date}</div>

                {/* Status */}
                <div className='flex-1 p-4 flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-yellow-500'></span>
                  {r.status}
                </div>

                {/* MORE button */}
                <div className='w-28 p-4 flex justify-end'>
                  <Button
                    variant='outline'
                    className='inline-flex items-center gap-2 rounded-lg border-gray-300 text-gray-700'
                  >
                    <RectangleEllipsis className='w-4 h-4' />
                    <span className='text-sm font-medium'>MORE</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className='w-full flex justify-end bg-white p-4'>
            <div className='flex items-center gap-10 font-medium'>
              {/* Items per page */}
              <div className='flex items-center gap-2'>
                <span>Items per page</span>
                <div className='flex items-center gap-1 cursor-pointer'>
                  <span>1000</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                </div>
              </div>

              {/* Range */}
              <div>1 – 10 of 50</div>

              {/* Controls */}
              <div className='flex items-center gap-3'>
                <Button
                  variant='ghost'
                  className='px-2 text-[16px] font-medium'
                >
                  First
                </Button>

                <Button variant='ghost' size='icon' className='h-6 w-6'>
                  <ChevronLeft />
                </Button>

                <Button variant='ghost' size='icon' className='h-6 w-6'>
                  <ChevronRight />
                </Button>

                <Button
                  variant='ghost'
                  className='px-2 text-[16px] font-medium'
                >
                  Last
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
