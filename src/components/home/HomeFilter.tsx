"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { carTypes } from '@/data/homeData';
import { trackConversion } from '@/utils/gtag';

const biharPlaces = [
  // Major Cities & Districts
  'Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga', 
  'Bihar Sharif', 'Arrah', 'Begusarai', 'Katihar', 'Munger', 
  'Purnia', 'Saharsa', 'Sasaram', 'Hajipur', 'Motihari', 
  'Bettiah', 'Buxar', 'Siwan', 'Gopalganj', 'Samastipur', 
  'Sitamarhi', 'Madhubani', 'Jamui', 'Jehanabad', 'Aurangabad', 
  'Nawada', 'Lakhisarai', 'Sheikhpura', 'Khagaria', 'Banka', 
  'Madhepura', 'Supaul', 'Araria', 'Kishanganj', 'Sheohar', 
  'Bhabua', 'Arwal', 'Chapra',
  
  // Popular Tourist & Religious Places
  'Rajgir', 'Nalanda', 'Bodh Gaya', 'Vaishali', 'Sonpur', 
  'Pawapuri', 'Kakolat', 'Valmiki Nagar', 'Vikramshila', 
  'Patna Sahib', 'Maner Sharif',
  
  // Key Transit Hubs (Airports, Railway Stations)
  'Patna Airport', 'Darbhanga Airport', 'Gaya Airport', 
  'Danapur', 'Patna Junction', 'Muzaffarpur Junction',
  
  // Nearby popular destinations
  'Deoghar', 'Ranchi', 'Jamshedpur', 'Varanasi', 'Kolkata'
];

// Helper to format date strings for WhatsApp messages
function formatDateTime(val: string): string {
  if (!val) return 'Not Selected';
  try {
    const d = new Date(val);
    if (isNaN(d.getTime())) return val;
    return d.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  } catch (e) {
    return val;
  }
}

// Custom dropdown component for city search selection
interface CitySearchDropdownProps {
  label: string;
  value: string;
  onChange: (city: string) => void;
  placeholder: string;
  iconSvg: React.ReactNode;
}

function CitySearchDropdown({ label, value, onChange, placeholder, iconSvg }: CitySearchDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const filteredPlaces = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return biharPlaces;
    return biharPlaces.filter(p => p.toLowerCase().includes(q));
  }, [search]);

  return (
    <div className="single-search-box react-dropdown-container" ref={dropdownRef} style={{ position: 'relative' }}>
      {iconSvg}
      <div 
        className="custom-select-dropdown react-dropdown" 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: 'pointer', width: '100%' }}
      >
        <div className="input-field-value">
          <div className="destination" style={{ paddingLeft: '8px' }}>
            <span style={{ fontSize: '11px', color: '#6B7280', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{label}</span>
            <h6 style={{ fontSize: '15px', color: '#111827', fontWeight: '600', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {value || placeholder}
            </h6>
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className="custom-select-wrap active" 
          style={{ 
            display: 'block', 
            opacity: 1, 
            zIndex: 9999, 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            width: '280px', 
            backgroundColor: '#FFFFFF', 
            border: '1px solid #E5E7EB', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
            marginTop: '4px'
          }}
        >
          <div className="custom-select-search-area" style={{ padding: '8px 12px', borderBottom: '1px solid #E5E7EB', display: 'flex', alignItems: 'center' }}>
            <i className="bx bx-search" style={{ marginRight: '8px', color: '#6B7280' }}></i>
            <input 
              type="text" 
              placeholder={`Search ${label}...`} 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', border: 'none', outline: 'none', fontSize: '14px', color: '#111827' }}
              autoFocus
            />
          </div>
          <ul className="option-list" style={{ maxHeight: '200px', overflowY: 'auto', padding: 0, margin: 0 }}>
            {filteredPlaces.length > 0 ? (
              filteredPlaces.map((city, idx) => (
                <li 
                  key={idx} 
                  onClick={() => { onChange(city); setIsOpen(false); setSearch(""); }}
                  style={{ padding: '10px 15px', cursor: 'pointer', borderBottom: '1px solid #F3F4F6' }}
                  className="single-item"
                >
                  <h6 style={{ margin: 0, fontSize: '14px', color: '#111827', fontWeight: '500' }}>{city}</h6>
                </li>
              ))
            ) : (
              <li style={{ padding: '15px', color: '#6B7280', textAlign: 'center', fontSize: '14px' }}>No places found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

// Custom dropdown component for Airport selection
function AirportDropdown({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const airportsList = [
    'Patna Airport (PAT)',
    'Darbhanga Airport (DBG)',
    'Gaya Airport (GAY)'
  ];

  return (
    <div className="single-search-box react-dropdown-container" ref={containerRef} style={{ position: 'relative' }}>
      <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M12.5944 8.99987C12.5944 10.988 10.9826 12.5998 8.99443 12.5998C7.00627 12.5998 5.39465 10.988 5.39465 8.99987C5.39465 7.0117 7.00627 5.40009 8.99443 5.40009C10.9826 5.40009 12.5944 7.0117 12.5944 8.99987Z" fill="#1781FE" />
          <path d="M17.4601 8.4599H16.2564C15.9858 4.86535 13.1291 2.00812 9.53458 1.7372V0.539976C9.53458 0.241723 9.29268 0 8.9946 0C8.69635 0 8.45462 0.241723 8.45462 0.539976V1.7372C4.85986 2.00812 2.00297 4.86535 1.73235 8.4599H0.540018C0.241723 8.4599 0 8.7017 0 8.99987C0 9.29813 0.241723 9.53985 0.539976 9.53985H1.73239C2.00297 13.1344 4.85991 15.9916 8.45441 16.2625V17.4601C8.45441 17.7583 8.69614 18 8.99439 18C9.29251 18 9.53428 17.7583 9.53428 17.4601V16.2625C13.1289 15.9918 15.9858 13.1346 16.2564 9.53985H17.4601C17.7583 9.53985 18 9.29813 18 8.99987C18 8.70175 17.7583 8.4599 17.4601 8.4599ZM8.99443 15.2096C5.56504 15.2094 2.78509 12.4291 2.78509 8.9997C2.78522 5.57014 5.56554 2.7902 8.99494 2.7902C12.4245 2.7902 15.2046 5.57048 15.2046 8.99987C15.2005 12.428 12.4225 15.2058 8.99443 15.2096Z" fill="#1781FE" />
        </g>
      </svg>
      <div className="custom-select-dropdown react-dropdown" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        <div className="input-field-value">
          <div className="destination" style={{ paddingLeft: '8px' }}>
            <span style={{ fontSize: '11px', color: '#6B7280', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Airport</span>
            <h6 style={{ fontSize: '15px', color: '#111827', fontWeight: '600', margin: 0 }}>{value}</h6>
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className="custom-select-wrap active" 
          style={{ 
            display: 'block', 
            opacity: 1, 
            zIndex: 9999, 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            width: '280px', 
            backgroundColor: '#FFFFFF', 
            border: '1px solid #E5E7EB', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
            marginTop: '4px'
          }}
        >
          <ul className="option-list" style={{ padding: 0, margin: 0 }}>
            {airportsList.map((a, i) => (
              <li 
                key={i} 
                onClick={() => { onChange(a); setIsOpen(false); }}
                style={{ padding: '10px 15px', cursor: 'pointer', borderBottom: '1px solid #F3F4F6' }}
                className="single-item"
              >
                <h6 style={{ margin: 0, fontSize: '14px', color: '#111827', fontWeight: '500' }}>{a}</h6>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Custom dropdown component for Trip Type / Direction in Airport form
function AirportDirectionDropdown({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="single-search-box react-dropdown-container" ref={containerRef} style={{ position: 'relative' }}>
      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.3024 4.186H10C9.81501 4.186 9.63755 4.1125 9.50671 3.98166C9.37587 3.85082 9.30237 3.67336 9.30237 3.48833C9.30237 3.30329 9.37587 3.12583 9.50671 2.99499C9.63755 2.86415 9.81501 2.79065 10 2.79065H19.3024C19.4874 2.79065 19.6649 2.86415 19.7957 2.99499C19.9266 3.12583 20.0001 3.30329 20.0001 3.48833C20.0001 3.67336 19.9266 3.85082 19.7957 3.98166C19.6649 4.1125 19.4874 4.186 19.3024 4.186Z" fill="#1781FE" />
      </svg>
      <div className="custom-select-dropdown react-dropdown" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        <div className="input-field-value">
          <div className="destination" style={{ paddingLeft: '8px' }}>
            <span style={{ fontSize: '11px', color: '#6B7280', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Trip Type</span>
            <h6 style={{ fontSize: '15px', color: '#111827', fontWeight: '600', margin: 0 }}>{value}</h6>
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className="custom-select-wrap active" 
          style={{ 
            display: 'block', 
            opacity: 1, 
            zIndex: 9999, 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            width: '280px', 
            backgroundColor: '#FFFFFF', 
            border: '1px solid #E5E7EB', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
            marginTop: '4px'
          }}
        >
          <ul className="option-list" style={{ padding: 0, margin: 0 }}>
            {['Pickup from Airport', 'Drop to Airport'].map((dir, i) => (
              <li 
                key={i} 
                onClick={() => { onChange(dir); setIsOpen(false); }}
                style={{ padding: '10px 15px', cursor: 'pointer', borderBottom: '1px solid #F3F4F6' }}
                className="single-item"
              >
                <h6 style={{ margin: 0, fontSize: '14px', color: '#111827', fontWeight: '500' }}>{dir}</h6>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Custom dropdown component for Car Category
function CarTypeDropdown({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="single-search-box react-dropdown-container" ref={containerRef} style={{ position: 'relative' }}>
      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M19.3024 4.186H10C9.81501 4.186 9.63755 4.1125 9.50671 3.98166C9.37587 3.85082 9.30237 3.67336 9.30237 3.48833C9.30237 3.30329 9.37587 3.12583 9.50671 2.99499C9.63755 2.86415 9.81501 2.79065 10 2.79065H19.3024C19.4874 2.79065 19.6649 2.86415 19.7957 2.99499C19.9266 3.12583 20.0001 3.30329 20.0001 3.48833C20.0001 3.67336 19.9266 3.85082 19.7957 3.98166C19.6649 4.1125 19.4874 4.186 19.3024 4.186ZM17.4419 7.90695H10C9.81501 7.90695 9.63755 7.83344 9.50671 7.7026C9.37587 7.57176 9.30237 7.39431 9.30237 7.20927C9.30237 7.02424 9.37587 6.84678 9.50671 6.71594C9.63755 6.5851 9.81501 6.5116 10 6.5116H17.4419C17.627 6.5116 17.8044 6.5851 17.9353 6.71594C18.0661 6.84678 18.1396 7.02424 18.1396 7.20927C18.1396 7.39431 18.0661 7.57176 17.9353 7.7026C17.8044 7.83344 17.627 7.90695 17.4419 7.90695ZM19.3024 13.4884H10C9.81501 13.4884 9.63755 13.4149 9.50671 13.284C9.37587 13.1532 9.30237 12.9757 9.30237 12.7907C9.30237 12.6057 9.37587 12.4282 9.50671 12.2974C9.63755 12.1665 9.81501 12.093 10 12.093H19.3024C19.4874 12.093 19.6649 12.1665 19.7957 12.2974C19.9266 12.428 20.0001 12.6057 20.0001 12.7907C20.0001 12.9757 19.9266 13.1532 19.7957 13.284C19.6649 13.4149 19.4874 13.4884 19.3024 13.4884ZM17.4419 17.2093H10C9.81501 17.2093 9.63755 17.1358 9.50671 17.005C9.37587 16.8741 9.30237 16.6967 9.30237 16.5116C9.30237 16.3266 9.37587 16.1491 9.50671 16.0183C9.63755 15.8875 9.81501 15.814 10 15.814H17.4419C17.627 15.814 17.8044 15.8875 17.9353 16.0183C18.06 16.1491 18.1396 16.3266 18.1396 16.5116C18.1396 16.6967 18.0661 16.6967 17.9353 17.005C17.8044 17.1358 17.627 17.2093 17.4419 17.2093Z" fill="#1781FE" />
          <path d="M3.48826 8.83719C5.41485 8.83719 6.97665 7.27538 6.97665 5.3488C6.97665 3.42222 5.41485 1.86041 3.48826 1.86041C1.56168 1.86041 -0.00012207 3.42222 -0.00012207 5.3488C-0.00012207 7.27538 1.56168 8.83719 3.48826 8.83719Z" fill="#1781FE" />
          <path d="M3.48826 18.1396C5.41485 18.1396 6.97665 16.5778 6.97665 14.6512C6.97665 12.7246 5.41485 11.1628 3.48826 11.1628C1.56168 11.1628 -0.00012207 12.7246 -0.00012207 14.6512C-0.00012207 16.5778 1.56168 18.1396 3.48826 18.1396Z" fill="#1781FE" />
        </g>
      </svg>
      <div className="custom-select-dropdown react-dropdown" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        <div className="input-field-value">
          <div className="destination" style={{ paddingLeft: '8px' }}>
            <span style={{ fontSize: '11px', color: '#6B7280', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Car Category</span>
            <h6 style={{ fontSize: '15px', color: '#111827', fontWeight: '600', margin: 0 }}>{value}</h6>
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className="custom-select-wrap active" 
          style={{ 
            display: 'block', 
            opacity: 1, 
            zIndex: 9999, 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            width: '280px', 
            backgroundColor: '#FFFFFF', 
            border: '1px solid #E5E7EB', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
            marginTop: '4px'
          }}
        >
          <ul className="option-list" style={{ padding: 0, margin: 0 }}>
            {carTypes.map((car, i) => (
              <li 
                key={i} 
                onClick={() => { onChange(car); setIsOpen(false); }}
                style={{ padding: '10px 15px', cursor: 'pointer', borderBottom: '1px solid #F3F4F6' }}
                className="single-item"
              >
                <h6 style={{ margin: 0, fontSize: '14px', color: '#111827', fontWeight: '500' }}>{car}</h6>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Custom field for React Date & Time input loading
function DatePickerField({ label, value, onChange }: { label: string; value: string; onChange: (val: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBoxClick = () => {
    if (inputRef.current) {
      try {
        inputRef.current.showPicker();
      } catch (e) {
        inputRef.current.focus();
      }
    }
  };

  const displayValue = useMemo(() => {
    if (!value) return 'Select Date & Time';
    return formatDateTime(value);
  }, [value]);

  return (
    <div 
      className="single-search-box react-date-field" 
      onClick={handleBoxClick}
      style={{ cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', width: '100%', minWidth: '180px' }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M16.125 1.28394H14.8913V2.43609C14.9509 2.57307 14.9755 2.72275 14.9629 2.87163C14.9502 3.0205 14.9007 3.16388 14.8188 3.28883C14.7368 3.41379 14.6251 3.51638 14.4936 3.58736C14.3622 3.65834 14.2151 3.69547 14.0657 3.6954C13.9163 3.69533 13.7692 3.65807 13.6378 3.58697C13.5064 3.51587 13.3948 3.41318 13.313 3.28815C13.2312 3.16312 13.1818 3.0197 13.1693 2.87081C13.1567 2.72193 13.1815 2.57227 13.2413 2.43534V1.28409H11.5136V2.43609C11.5733 2.57304 11.598 2.72272 11.5854 2.87159C11.5728 3.02047 11.5234 3.16388 11.4415 3.28887C11.3597 3.41386 11.248 3.5165 11.1165 3.58754C10.9851 3.65858 10.838 3.69577 10.6886 3.69577C10.5392 3.69577 10.3922 3.65858 10.2607 3.58754C10.1293 3.5165 10.0176 3.41386 9.93572 3.28887C9.85387 3.16388 9.80441 3.02047 9.79183 2.87159C9.77924 2.72272 9.80391 2.57304 9.86363 2.43609V1.28394H8.13638V2.43609C8.19609 2.57304 8.22076 2.72272 8.20818 2.87159C8.19559 3.02047 8.14613 3.16388 8.06428 3.28887C7.98242 3.41386 7.87073 3.5165 7.73929 3.58754C7.60784 3.65858 7.46079 3.69577 7.31138 3.69577C7.16197 3.69577 7.01491 3.65858 6.88346 3.58754C6.75202 3.5165 6.64033 3.41386 6.55848 3.28887C6.47662 3.16388 6.42716 3.02047 6.41457 2.87159C6.40199 2.72272 6.42666 2.57292 6.48638 2.43609V1.28394H4.75875V2.43519C4.81852 2.57212 4.84327 2.72178 4.83075 2.87066C4.81823 3.01955 4.76884 3.16297 4.68704 3.288C4.60524 3.41303 4.49359 3.51572 4.36219 3.58682C4.23078 3.65792 4.08373 3.69518 3.93432 3.69525C3.78491 3.69532 3.63784 3.65819 3.50636 3.58721C3.37489 3.51623 3.26315 3.41364 3.18124 3.28868C3.09932 3.16373 3.0498 3.02035 3.03715 2.87148C3.02449 2.7226 3.0491 2.57292 3.10875 2.43594V1.28394H1.875C1.37772 1.28394 0.900806 1.48148 0.549175 1.83311C0.197544 2.18474 0 2.66165 0 3.15894L0 16.0964C4.97191e-05 16.5937 0.19761 17.0706 0.54923 17.4222C0.90085 17.7738 1.37773 17.9714 1.875 17.9714H16.125C16.6223 17.9714 17.0992 17.7738 17.4508 17.4222C17.8024 17.0706 18 16.5937 18 16.0964V3.15894C18 2.66165 17.8025 2.18474 17.4508 1.83311C17.0992 1.48148 16.6223 1.28394 16.125 1.28394ZM17.25 15.9089C17.25 16.257 17.1117 16.5909 16.8656 16.837C16.6194 17.0832 16.2856 17.2214 15.9375 17.2214H2.0625C1.7144 17.2214 1.38056 17.0832 1.13442 16.837C0.888281 16.5909 0.75 16.257 0.75 15.9089V6.34644C0.75 5.99834 0.888281 5.6645 1.13442 5.41836C1.38056 5.17222 1.7144 5.03394 2.0625 5.03394H15.9375C16.2856 5.03394 16.6194 5.17222 16.8656 5.41836C17.1117 5.6645 17.25 5.99834 17.25 6.34644V15.9089Z" fill="#1781FE" />
          <path d="M14.6287 0.591064C14.6287 0.280404 14.3769 0.0285645 14.0662 0.0285645C13.7556 0.0285645 13.5037 0.280404 13.5037 0.591064V2.84106C13.5037 3.15172 13.7556 3.40356 14.0662 3.40356C14.3769 3.40356 14.6287 3.15172 14.6287 2.84106V0.591064Z" fill="#1781FE" />
          <path d="M11.2512 0.591064C11.2512 0.280404 10.9994 0.0285645 10.6887 0.0285645C10.3781 0.0285645 10.1262 0.280404 10.1262 0.591064V2.84106C10.1262 3.15172 10.3781 3.40356 10.6887 3.40356C10.9994 3.40356 11.2512 3.15172 11.2512 2.84106V0.591064Z" fill="#1781FE" />
          <path d="M7.87378 0.591064C7.87378 0.280404 7.62194 0.0285645 7.31128 0.0285645C7.00062 0.0285645 6.74878 0.280404 6.74878 0.591064V2.84106C6.74878 3.15172 7.00062 3.40356 7.31128 3.40356C7.62194 3.40356 7.87378 3.15172 7.87378 2.84106V0.591064Z" fill="#1781FE" />
          <path d="M4.49628 0.591064C4.49628 0.280404 4.24444 0.0285645 3.93378 0.0285645C3.62312 0.0285645 3.37128 0.591064V2.84106C3.37128 3.15172 3.62312 3.40356 3.93378 3.40356C4.24444 3.40356 4.49628 3.15172 4.49628 2.84106V0.591064Z" fill="#1781FE" />
        </g>
      </svg>
      <div 
        className="custom-select-dropdown react-dropdown" 
        style={{ width: '100%', paddingLeft: '8px' }}
      >
        <span style={{ fontSize: '11px', color: '#6B7280', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{label}</span>
        <h6 style={{ fontSize: '15px', color: value ? '#111827' : '#6B7280', fontWeight: '600', margin: 0 }}>
          {displayValue}
        </h6>
      </div>
      <input 
        type="datetime-local" 
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          cursor: 'pointer',
          zIndex: 5
        }}
      />
    </div>
  );
}

export default function HomeFilter() {
  // Tab State
  const [activeTab, setActiveTab] = useState<'one-way' | 'round-trip' | 'airport'>('one-way');

  // One-Way State
  const [owPickup, setOwPickup] = useState("Patna");
  const [owDrop, setOwDrop] = useState("Darbhanga");
  const [owDate, setOwDate] = useState("");
  const [owCar, setOwCar] = useState("Dzire/Etios");

  // Round-Trip State
  const [rtPickup, setRtPickup] = useState("Patna");
  const [rtDrop, setRtDrop] = useState("Darbhanga");
  const [rtDate, setRtDate] = useState("");
  const [rtReturnDate, setRtReturnDate] = useState("");
  const [rtCar, setRtCar] = useState("Dzire/Etios");

  // Airport State
  const [apAirport, setApAirport] = useState("Patna Airport (PAT)");
  const [apDirection, setApDirection] = useState("Pickup from Airport");
  const [apDate, setApDate] = useState("");
  const [apCar, setApCar] = useState("Dzire/Etios");

  const handleSubmitOneWay = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = formatDateTime(owDate);
    const text = `Hello Taxi Service Bihar, I want to book a One-Way Taxi from ${owPickup} to ${owDrop} on Date: ${formattedDate} for Car Type: ${owCar}. Please confirm availability.`;
    const encodedText = encodeURIComponent(text);
    trackConversion();
    window.open(`https://wa.me/918102550190?text=${encodedText}`, '_blank');
  };

  const handleSubmitRoundTrip = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = formatDateTime(rtDate);
    const formattedReturnDate = formatDateTime(rtReturnDate);
    const text = `Hello Taxi Service Bihar, I want to book a Round-Trip Taxi from ${rtPickup} to ${rtDrop} from Date: ${formattedDate} to ${formattedReturnDate} for Car Type: ${rtCar}. Please confirm availability.`;
    const encodedText = encodeURIComponent(text);
    trackConversion();
    window.open(`https://wa.me/918102550190?text=${encodedText}`, '_blank');
  };

  const handleSubmitAirport = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = formatDateTime(apDate);
    const text = `Hello Taxi Service Bihar, I want to book an Airport Transfer (${apDirection}) for ${apAirport} on Date: ${formattedDate} for Car Type: ${apCar}. Please confirm availability.`;
    const encodedText = encodeURIComponent(text);
    trackConversion();
    window.open(`https://wa.me/918102550190?text=${encodedText}`, '_blank');
  };

  // SVGs for Search Dropdowns
  const pickupIcon = (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M12.5944 8.99987C12.5944 10.988 10.9826 12.5998 8.99443 12.5998C7.00627 12.5998 5.39465 10.988 5.39465 8.99987C5.39465 7.0117 7.00627 5.40009 8.99443 5.40009C10.9826 5.40009 12.5944 7.0117 12.5944 8.99987Z" fill="#1781FE" />
        <path d="M17.4601 8.4599H16.2564C15.9858 4.86535 13.1291 2.00812 9.53458 1.7372V0.539976C9.53458 0.241723 9.29268 0 8.9946 0C8.69635 0 8.45462 0.241723 8.45462 0.539976V1.7372C4.85986 2.00812 2.00297 4.86535 1.73235 8.4599H0.540018C0.241723 8.4599 0 8.7017 0 8.99987C0 9.29813 0.241723 9.53985 0.539976 9.53985H1.73239C2.00297 13.1344 4.85991 15.9916 8.45441 16.2625V17.4601C8.45441 17.7583 8.69614 18 8.99439 18C9.29251 18 9.53428 17.7583 9.53428 17.4601V16.2625C13.1289 15.9918 15.9858 13.1346 16.2564 9.53985H17.4601C17.7583 9.53985 18 9.29813 18 8.99987C18 8.70175 17.7583 8.4599 17.4601 8.4599ZM8.99443 15.2096C5.56504 15.2094 2.78509 12.4291 2.78509 8.9997C2.78522 5.57014 5.56554 2.7902 8.99494 2.7902C12.4245 2.7902 15.2046 5.57048 15.2046 8.99987C15.2005 12.428 12.4225 15.2058 8.99443 15.2096Z" fill="#1781FE" />
      </g>
    </svg>
  );

  const dropIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  return (
    <div className="filter-wrapper" style={{ position: 'relative', zIndex: 20 }}>
      <div className="container">
        <ul className="filter-item-list">
          <li 
            className={`single-item ${activeTab === 'one-way' ? 'active' : ''}`}
            onClick={() => setActiveTab('one-way')}
            style={{ cursor: 'pointer' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.0698 22.0465V23.1628C15.0698 23.3848 15.158 23.5978 15.315 23.7548C15.472 23.9118 15.6849 24 15.907 24C16.129 24 16.342 23.9118 16.499 23.7548C16.656 23.5978 16.7442 23.3848 16.7442 23.1628V22.0465C16.7442 21.8245 16.656 21.6115 16.499 21.4545C16.342 21.2975 16.129 21.2093 15.907 21.2093C15.6849 21.2093 15.472 21.2975 15.315 21.4545C15.158 21.6115 15.0698 21.8245 15.0698 22.0465ZM13.3953 0.837209V6.4186C13.3953 6.64065 13.4835 6.85359 13.6405 7.0106C13.7976 7.16761 14.0105 7.25581 14.2325 7.25581C14.4546 7.25581 14.6675 7.16761 14.8245 7.0106C14.9815 6.85359 15.0698 6.64065 15.0698 6.4186V0.837209C15.0698 0.615168 14.9815 0.40222 14.8245 0.245213C14.6675 0.0882058 14.4546 0 14.2325 0C14.0105 0 13.7976 0.0882058 13.6405 0.245213C13.4835 0.40222 13.3953 0.615168 13.3953 0.837209ZM7.2558 22.0465V23.1628C7.2558 23.3848 7.344 23.5978 7.50101 23.7548C7.65802 23.9118 7.87097 24 8.09301 24C8.31505 24 8.528 23.9118 8.685 23.7548C8.84201 23.5978 8.93022 23.3848 8.93022 23.1628V22.0465C8.93022 21.8245 8.84201 21.6115 8.685 21.4545C8.528 21.2975 8.31505 21.2093 8.09301 21.2093C7.87097 21.2093 7.65802 21.2975 7.50101 21.4545C7.344 21.6115 7.2558 21.8245 7.2558 22.0465ZM8.93022 0.837209V6.4186C8.93022 6.64065 9.01842 6.85359 9.17543 7.0106C9.33244 7.16761 9.54538 7.25581 9.76743 7.25581C9.98947 7.25581 10.2024 7.16761 10.3594 7.0106C10.5164 6.85359 10.6046 6.64065 10.6046 6.4186V0.837209C10.6046 0.615168 10.5164 0.40222 10.3594 0.245213C10.2024 0.0882058 9.98947 0 9.76743 0C9.54538 0 9.33244 0.0882058 9.17543 0.245213C9.01842 0.40222 8.93022 0.615168 8.93022 0.837209Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.65113 1.67442H15.3488C15.5709 1.67442 15.7838 1.58621 15.9408 1.42921C16.0978 1.2722 16.186 1.05925 16.186 0.837209C16.186 0.615168 16.0978 0.40222 15.9408 0.245213C15.7838 0.0882057 15.5709 0 15.3488 0H8.65113C8.42909 0 8.21615 0.0882057 8.05914 0.245213C7.90213 0.40222 7.81392 0.615168 7.81392 0.837209C7.81392 1.05925 7.90213 1.2722 8.05914 1.42921C8.21615 1.58621 8.42909 1.67442 8.65113 1.67442ZM19.5349 8.65116C19.5349 7.83701 19.2114 7.0562 18.6357 6.48051C18.06 5.90482 17.2792 5.5814 16.4651 5.5814H7.53486C6.7207 5.5814 5.93989 5.90482 5.3642 6.48051C4.78851 7.0562 4.46509 7.83701 4.46509 8.65116V19.814C4.46509 20.6281 4.78851 21.4089 5.3642 21.9846C5.93989 22.5603 6.7207 22.8837 7.53486 22.8837H16.4651C17.2792 22.8837 18.06 22.5603 18.6357 21.9846C19.2114 21.4089 19.5349 20.6281 19.5349 19.814V8.65116ZM11.1628 9.76744V18.6977C11.1628 18.9197 11.251 19.1327 11.408 19.2897C11.565 19.4467 11.7779 19.5349 12 19.5349C12.222 19.5349 12.435 19.4467 12.592 19.2897C12.749 19.1327 12.8372 18.9197 12.8372 18.6977V9.76744C12.8372 9.5454 12.749 9.33245 12.592 9.17545C12.435 9.01844 12.222 8.93023 12 8.93023C11.7779 8.93023 11.565 9.01844 11.408 9.17545C11.251 9.33245 11.1628 9.5454 11.1628 9.76744ZM7.81392 9.76744V18.6977C7.81392 18.9197 7.90213 19.1327 8.05914 19.2897C8.21615 19.4467 8.42909 19.5349 8.65113 19.5349C8.87318 19.5349 9.08612 19.4467 9.24313 19.2897C9.40014 19.1327 9.48834 18.9197 9.48834 18.6977V9.76744C9.48834 9.5454 9.40014 9.33245 9.24313 9.17545C9.08612 9.01844 8.87318 8.93023 8.65113 8.93023C8.42909 8.93023 8.21615 9.01844 8.05914 9.17545C7.90213 9.33245 7.81392 9.5454 7.81392 9.76744ZM14.5116 9.76744V18.6977C14.5116 18.9197 14.5998 19.1327 14.7568 19.2897C14.9138 19.4467 15.1268 19.5349 15.3488 19.5349C15.5709 19.5349 15.7838 19.4467 15.9408 19.2897C16.0978 19.1327 16.186 18.9197 16.186 18.6977V9.76744C16.186 9.5454 16.0978 9.33245 15.9408 9.17545C15.7838 9.01844 15.5709 8.93023 15.3488 8.93023C15.1268 8.93023 14.9138 9.01844 14.7568 9.17545C14.5998 9.33245 14.5116 9.5454 14.5116 9.76744Z" />
              </g>
            </svg>
            <span>One-Way Taxi</span>
          </li>
          <li 
            className={`single-item hotel ${activeTab === 'round-trip' ? 'active' : ''}`}
            onClick={() => setActiveTab('round-trip')}
            style={{ cursor: 'pointer' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5381 12.8663L20.7881 12.2344V7.91437H21.5381V12.8663ZM23.595 6.64125L22.3744 3.78937C22.3451 3.72215 22.2969 3.66489 22.2356 3.62461C22.1744 3.58432 22.1027 3.56274 22.0294 3.5625H20.2969C20.2237 3.56253 20.1522 3.58405 20.0912 3.62438C20.0302 3.66472 19.9824 3.72209 19.9538 3.78937L18.7331 6.64125C18.7087 6.69834 18.6989 6.76059 18.7044 6.82242C18.71 6.88426 18.7308 6.94375 18.765 6.99558C18.7991 7.04741 18.8456 7.08995 18.9003 7.11941C18.9549 7.14887 19.016 7.16432 19.0781 7.16437H23.25C23.3121 7.16432 23.3732 7.14887 23.4278 7.11941C23.4825 7.08995 23.529 7.04741 23.5632 6.99558C23.5973 6.94375 23.6181 6.88426 23.6237 6.82242C23.6293 6.76059 23.6194 6.69834 23.595 6.64125ZM6.05625 10.9875V10.5862C6.05689 10.3199 6.16298 10.0647 6.35132 9.87632C6.53965 9.68798 6.79491 9.58189 7.06125 9.58125H9.44062C9.70706 9.5816 9.96249 9.68759 10.1509 9.87599C10.3393 10.0644 10.4453 10.3198 10.4456 10.5862V10.9875H12.0544V10.5862C12.0547 10.3198 12.1607 10.0644 12.3491 9.87599C12.5375 9.68759 12.7929 9.5816 13.0594 9.58125H15.4387C15.7051 9.58189 15.9603 9.68798 16.1487 9.87632C16.337 10.0647 16.4431 10.3199 16.4437 10.5862V10.9875H18.375V9.02625C18.3743 8.47798 18.1561 7.95237 17.7684 7.56469C17.3808 7.177 16.8551 6.95887 16.3069 6.95813H6.19312C5.64485 6.95887 5.11925 7.177 4.73156 7.56469C4.34387 7.95237 4.12574 8.47798 4.125 9.02625V10.9875H6.05625ZM20.7206 14.1375H21.8869L21.5381 13.845L20.7881 13.215L19.0294 11.7375H3.47062L0.613125 14.1375H20.7206ZM2.0625 19.1794H1.3125V20.0625C1.3128 20.1619 1.3524 20.2571 1.42266 20.3273C1.49292 20.3976 1.58814 20.4372 1.6875 20.4375H3.51375C3.61311 20.4372 3.70833 20.3976 3.77859 20.3273C3.84885 20.2571 3.88845 20.1619 3.88875 20.0625V19.1794H2.0625ZM19.3612 19.1794H18.6112V20.0625C18.6115 20.1619 18.6512 20.2571 18.7214 20.3273C18.7917 20.3976 18.8869 20.4372 18.9862 20.4375H20.8125C20.9119 20.4372 21.0071 20.3976 21.0773 20.3273C21.1476 20.2571 21.1872 20.1619 21.1875 20.0625V19.1794H19.3612ZM1.125 14.8875H0.375V18.0544C0.375297 18.1537 0.414901 18.249 0.485163 18.3192C0.555425 18.3895 0.650635 18.4291 0.75 18.4294H21.75C21.8494 18.4291 21.9446 18.3895 22.0148 18.3192C22.0851 18.249 22.1247 18.1537 22.125 18.0544V14.8875H1.125Z" />
            </svg>
            <span>Round Trip Taxi</span>
          </li>
          <li 
            className={`single-item ${activeTab === 'airport' ? 'active' : ''}`}
            onClick={() => setActiveTab('airport')}
            style={{ cursor: 'pointer' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 22C3.765 22 2 20.235 2 12C2 3.765 3.765 2 12 2C20.235 2 22 3.765 22 12C22 20.235 20.235 22 12 22ZM14.8135 7.43172C14.7403 7.29853 14.632 7.1879 14.5005 7.11182C14.3689 7.03573 14.219 6.99709 14.067 7.00007C13.9151 7.00305 13.7668 7.04754 13.6383 7.12873C13.5098 7.20992 13.406 7.3247 13.338 7.46066L9.88156 14.3736L8.35523 11.5984C8.28333 11.4677 8.17763 11.3586 8.04919 11.2827C7.92074 11.2067 7.77426 11.1667 7.62504 11.1667H6.16672C5.70648 11.1667 5.3334 11.5398 5.3334 12C5.3334 12.4602 5.70648 12.8333 6.16672 12.8333H7.13234L9.18656 16.5682C9.25981 16.7014 9.36809 16.812 9.49967 16.8881C9.63125 16.9642 9.78113 17.0028 9.93309 16.9998C10.085 16.9969 10.2333 16.9524 10.3618 16.8712C10.4903 16.7901 10.5941 16.6753 10.6621 16.5393L14.1186 9.62645L15.6449 12.4016C15.7168 12.5324 15.8225 12.6414 15.9509 12.7174C16.0793 12.7933 16.2258 12.8334 16.375 12.8334H17.8334C18.2936 12.8334 18.6667 12.4603 18.6667 12C18.6667 11.5398 18.2936 11.1667 17.8334 11.1667H16.8678L14.8135 7.43172Z" />
            </svg>
            <span>Airport Transfer</span>
          </li>
        </ul>

        <div className="filter-input-wrap" style={{ overflow: 'visible' }}>
          {/* ONE-WAY TAXI FORM */}
          <form 
            className={`filter-input react-filter-input ${activeTab === 'one-way' ? 'show' : ''}`} 
            onSubmit={handleSubmitOneWay}
            style={{ overflow: 'visible' }}
          >
            <CitySearchDropdown 
              label="Pickup City (Start)"
              value={owPickup}
              onChange={setOwPickup}
              placeholder="Select Start City"
              iconSvg={pickupIcon}
            />
            
            <CitySearchDropdown 
              label="Drop City (End)"
              value={owDrop}
              onChange={setOwDrop}
              placeholder="Select End City"
              iconSvg={dropIcon}
            />
            
            <DatePickerField 
              label="Pickup Date & Time"
              value={owDate}
              onChange={setOwDate}
            />

            <CarTypeDropdown 
              value={owCar}
              onChange={setOwCar}
            />
            
            <button type="submit" className="primary-btn1" style={{ height: '62px', marginTop: '12px' }}>
              <span>
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M17.7799 16.746L14.6861 13.7226L14.6137 13.6126C14.4774 13.4781 14.2936 13.4028 14.1022 13.4028C13.9107 13.4028 13.7269 13.4781 13.5906 13.6126C10.9613 16.0246 6.91095 16.1554 4.12376 13.9188C1.33658 11.6821 0.680209 7.7696 2.58814 4.77921C4.49607 1.78882 8.37732 0.64519 11.6585 2.10734C14.9396 3.56949 16.5993 7.18566 15.539 10.555C15.5016 10.675 15.4972 10.8029 15.5262 10.9251C15.5552 11.0474 15.6166 11.1597 15.7039 11.2501C15.7921 11.3421 15.9027 11.4097 16.0248 11.4463C16.1469 11.4829 16.2764 11.4872 16.4007 11.4589C16.5243 11.4317 16.6387 11.3725 16.7323 11.2872C16.8258 11.202 16.8954 11.0936 16.934 10.973C18.1996 6.97472 16.2878 2.6716 12.434 0.848041C8.58017 -0.975514 3.94271 0.225775 1.52009 3.67706C-0.902526 7.12835 -0.382565 11.7918 2.74388 14.6518C5.87033 17.5118 10.6646 17.7083 14.0273 15.1173L16.7667 17.7955C16.9042 17.7298 17.0875 18.0014 17.2782 18.0014C17.4689 18.0014 17.6522 17.9276 17.7897 17.7955C17.8568 17.7298 17.9101 17.6513 17.9465 17.5648C17.9829 17.4782 18.0016 17.3852 18.0016 17.2913C18.0016 17.1974 17.9829 17.1045 17.9465 17.0179C17.9101 16.9313 17.8568 16.8529 17.7897 16.7872L17.7799 16.746Z" fill="#FFFFFF" />
                  </g>
                </svg>
                BOOK TAXI
              </span>
            </button>
          </form>

          {/* ROUND-TRIP TAXI FORM */}
          <form 
            className={`filter-input react-filter-input ${activeTab === 'round-trip' ? 'show' : ''}`} 
            onSubmit={handleSubmitRoundTrip}
            style={{ overflow: 'visible' }}
          >
            <CitySearchDropdown 
              label="Pickup City (Start)"
              value={rtPickup}
              onChange={setRtPickup}
              placeholder="Select Start City"
              iconSvg={pickupIcon}
            />
            
            <CitySearchDropdown 
              label="Drop City (End)"
              value={rtDrop}
              onChange={setRtDrop}
              placeholder="Select End City"
              iconSvg={dropIcon}
            />
            
            <div style={{ display: 'flex', gap: '8px', width: '100%', minWidth: '240px' }} className="react-double-date">
              <DatePickerField 
                label="Depart Date & Time"
                value={rtDate}
                onChange={setRtDate}
              />
              <DatePickerField 
                label="Return Date & Time"
                value={rtReturnDate}
                onChange={setRtReturnDate}
              />
            </div>

            <CarTypeDropdown 
              value={rtCar}
              onChange={setRtCar}
            />
            
            <button type="submit" className="primary-btn1" style={{ height: '62px', marginTop: '12px' }}>
              <span>
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M17.7799 16.746L14.6861 13.7226L14.6137 13.6126C14.4774 13.4781 14.2936 13.4028 14.1022 13.4028C13.9107 13.4028 13.7269 13.4781 13.5906 13.6126C10.9613 16.0246 6.91095 16.1554 4.12376 13.9188C1.33658 11.6821 0.680209 7.7696 2.58814 4.77921C4.49607 1.78882 8.37732 0.64519 11.6585 2.10734C14.9396 3.56949 16.5993 7.18566 15.539 10.555C15.5016 10.675 15.4972 10.8029 15.5262 10.9251C15.5552 11.0474 15.6166 11.1597 15.7039 11.2501C15.7921 11.3421 15.9027 11.4097 16.0248 11.4463C16.1469 11.4829 16.2764 11.4872 16.4007 11.4589C16.5243 11.4317 16.6387 11.3725 16.7323 11.2872C16.8258 11.202 16.8954 11.0936 16.934 10.973C18.1996 6.97472 16.2878 2.6716 12.434 0.848041C8.58017 -0.975514 3.94271 0.225775 1.52009 3.67706C-0.902526 7.12835 -0.382565 11.7918 2.74388 14.6518C5.87033 17.5118 10.6646 17.7083 14.0273 15.1173L16.7667 17.7955C16.9042 17.7298 17.0875 18.0014 17.2782 18.0014C17.4689 18.0014 17.6522 17.9276 17.7897 17.7955C17.8568 17.7298 17.9101 17.6513 17.9465 17.5648C17.9829 17.4782 18.0016 17.3852 18.0016 17.2913C18.0016 17.1974 17.9829 17.1045 17.9465 17.0179C17.9101 16.9313 17.8568 16.8529 17.7897 16.7872L17.7799 16.746Z" fill="#FFFFFF" />
                  </g>
                </svg>
                BOOK TAXI
              </span>
            </button>
          </form>

          {/* AIRPORT TRANSFER FORM */}
          <form 
            className={`filter-input react-filter-input ${activeTab === 'airport' ? 'show' : ''}`} 
            onSubmit={handleSubmitAirport}
            style={{ overflow: 'visible' }}
          >
            <AirportDropdown 
              value={apAirport}
              onChange={setApAirport}
            />

            <AirportDirectionDropdown 
              value={apDirection}
              onChange={setApDirection}
            />
            
            <DatePickerField 
              label="Date & Time"
              value={apDate}
              onChange={setApDate}
            />

            <CarTypeDropdown 
              value={apCar}
              onChange={setApCar}
            />
            
            <button type="submit" className="primary-btn1" style={{ height: '62px', marginTop: '12px' }}>
              <span>
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M17.7799 16.746L14.6861 13.7226L14.6137 13.6126C14.4774 13.4781 14.2936 13.4028 14.1022 13.4028C13.9107 13.4028 13.7269 13.4781 13.5906 13.6126C10.9613 16.0246 6.91095 16.1554 4.12376 13.9188C1.33658 11.6821 0.680209 7.7696 2.58814 4.77921C4.49607 1.78882 8.37732 0.64519 11.6585 2.10734C14.9396 3.56949 16.5993 7.18566 15.539 10.555C15.5016 10.675 15.4972 10.8029 15.5262 10.9251C15.5552 11.0474 15.6166 11.1597 15.7039 11.2501C15.7921 11.3421 15.9027 11.4097 16.0248 11.4463C16.1469 11.4829 16.2764 11.4872 16.4007 11.4589C16.5243 11.4317 16.6387 11.3725 16.7323 11.2872C16.8258 11.202 16.8954 11.0936 16.934 10.973C18.1996 6.97472 16.2878 2.6716 12.434 0.848041C8.58017 -0.975514 3.94271 0.225775 1.52009 3.67706C-0.902526 7.12835 -0.382565 11.7918 2.74388 14.6518C5.87033 17.5118 10.6646 17.7083 14.0273 15.1173L16.7667 17.7955C16.9042 17.7298 17.0875 18.0014 17.2782 18.0014C17.4689 18.0014 17.6522 17.9276 17.7897 17.7955C17.8568 17.7298 17.9101 17.6513 17.9465 17.5648C17.9829 17.4782 18.0016 17.3852 18.0016 17.2913C18.0016 17.1974 17.9829 17.1045 17.9465 17.0179C17.9101 16.9313 17.8568 16.8529 17.7897 16.7872L17.7799 16.746Z" fill="#FFFFFF" />
                  </g>
                </svg>
                BOOK TAXI
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
