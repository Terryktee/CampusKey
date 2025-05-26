"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Nav from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import axios from "axios";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    if (!query) return;

    axios
      .get("http://localhost:8080/api/v1/property")
      .then((res) => {
        const filtered = res.data.filter(
          (property) =>
            property.propertyAddress?.toLowerCase().includes(query.toLowerCase()) ||
            property.propertyName?.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      })
      .catch((err) => console.error("Search failed", err));
  }, [query]);

  const handleNewSearch = () => {
    if (!localQuery.trim()) return;
    router.push(`/search-results?q=${encodeURIComponent(localQuery)}`);
  };

  return (
    <>
      <Nav />
      <div className="flex justify-around">
        <div className="flex w-full max-w-lg space-x-2 py-6">
          <Input
            type="search"
            className="rounded-full"
            placeholder="Search"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-white text-blue-400 rounded-full"
            onClick={handleNewSearch}
          >
            Search
          </Button>
        </div>
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight py-8">
          {results.length} result{results.length !== 1 ? "s" : ""}
        </h1>
      </div>

      <div className="flex justify-around py-2">
        <div className="flex flex-col gap-4">
          <div className="Property">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a property" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Property</SelectLabel>
                  <SelectItem value="Boys Only">Boys Only</SelectItem>
                  <SelectItem value="Girls only">Girls Only</SelectItem>
                  <SelectItem value="Mixed">Mixed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="Distance">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Distance" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Distance</SelectLabel>
                  <SelectItem value="lt5">less than 5 minutes</SelectItem>
                  <SelectItem value="5">5 minutes</SelectItem>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="20">20 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="gt30">more than 30 minutes</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="Price Range">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Price</SelectLabel>
                  <SelectItem value="lt80">less than 80</SelectItem>
                  <SelectItem value="90">90</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                  <SelectItem value="gt100">greater than 100</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="sort flex flex-row">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by :" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort</SelectLabel>
                  <SelectItem value="recommended">Recommendation</SelectItem>
                  <SelectItem value="cheap">Cheap</SelectItem>
                  <SelectItem value="expensive">Expensive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {results.length === 0 ? (
            <p>No results found.</p>
          ) : (
            results.map((property) => (
              <div
                key={property.propertyId}
                className="w-[740px] rounded-lg shadow-lg p-2 bg-blue-400 flex flex-col gap-y-2"
              >
                <h1>Resident: {property.propertyName}</h1>
                <h3>Location: {property.propertyAddress}</h3>
                <div className="flex gap-2">
                  <Button className="w-64 bg-[#0D6CA3]">Apply</Button>
                  <Button className="w-64 bg-[#0D6CA3]"
                   onClick={() => router.push(`/view/${property.propertyId}`)}>View</Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
