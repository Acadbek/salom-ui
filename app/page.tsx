"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/carbon/select";
import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { Button } from "@/registry/carbon/button/button";
import { ExampleForm } from "@/registry/carbon/example-form/example-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/carbon/accordion";
import CodeSnipped from "@/registry/carbon/code-snipped";
import { TooltipProvider } from "@/registry/carbon/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/carbon/modal";
import { Input } from "@/registry/carbon/input";
import { Tag } from "@/registry/carbon/tag";
import { Icon } from "@iconify/react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/carbon/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/registry/carbon/alert";
import { RadioGroup, RadioGroupItem } from "@/registry/carbon/radio";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/carbon/avatar";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/registry/carbon/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/registry/carbon/dropdown";
import Link from "next/link";
import { ButtonGroup } from "@/registry/carbon/button-group";
import { ArchiveIcon, ArrowLeftIcon, CalendarPlusIcon, ClockIcon, ListFilterPlusIcon, MailCheckIcon, MoreHorizontalIcon, TagIcon, Trash2Icon } from "lucide-react";

export default function Home() {

  const [tabs, setTabs] = React.useState([
    { id: 'tab1', label: 'Home', content: 'Home content' },
    { id: 'tab2', label: 'Profile', content: 'Profile content' },
    { id: 'tab3', label: 'Settings', content: 'Settings content' }
  ]);
  const [activeTab, setActiveTab] = React.useState('tab1');

  const handleTabClose = (closedValue: string) => {
    setTabs(prev => prev.filter(tab => tab.id !== closedValue));

    if (activeTab === closedValue) {
      const remainingTabs = tabs.filter(tab => tab.id !== closedValue);
      if (remainingTabs.length > 0) {
        setActiveTab(remainingTabs[0].id);
      }
    }

    console.log(`Tab closed: ${closedValue}`);
  };

  return (
    <TooltipProvider>
      <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Salom UI</h1>
          <p className="text-muted-foreground">
            A custom registry for distributing code using shadcn.
          </p>
          <ModeToggle />
        </header>
        <main className="flex flex-col flex-1 gap-8">

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                Code snipped component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex items-center justify-center gap-2 min-h-[400px] relative">
              <ButtonGroup>
                <ButtonGroup className="hidden sm:flex">
                  <Button kind="outline" size="icon" aria-label="Go Back">
                    <ArrowLeftIcon />
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button className="w-[200px]" kind="outline">Archive</Button>
                  <Button className="w-[200px]" kind="outline">Report</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button className="w-[200px]" kind="outline">Snooze</Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button kind="outline" size="icon" aria-label="More Options">
                        <MoreHorizontalIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <MailCheckIcon />
                          Mark as Read
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ArchiveIcon />
                          Archive
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <ClockIcon />
                          Snooze
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CalendarPlusIcon />
                          Add to Calendar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ListFilterPlusIcon />
                          Add to List
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <TagIcon />
                            Label As...
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup
                              value='personal'
                              onValueChange={() => { }}
                            >
                              <DropdownMenuRadioItem value="personal">
                                Personal
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="work">
                                Work
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="other">
                                Other
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Trash2Icon />
                          Trash
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ButtonGroup>
              </ButtonGroup>
            </div>
          </div>


          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                Code snipped component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex items-center justify-center gap-2 min-h-[400px] relative">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer">
                        <BreadcrumbEllipsis className="size-4" />
                        <span className="sr-only">Toggle menu</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                        <DropdownMenuItem>Themes</DropdownMenuItem>
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/docs/components">Components</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                Code snipped component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex items-center justify-center gap-2 min-h-[400px] relative">
              <Avatar>
                <AvatarImage
                  src="https://github.com/acadbek.png"
                  alt="Avatar Image"
                />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Avatar Image"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                Code snipped component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <RadioGroup className="flex items-center gap-3">
                <RadioGroupItem value="option1" id="r1" />
                <RadioGroupItem value="option2" id="r2" />
                <RadioGroupItem value="option3" id="r3" />
              </RadioGroup>
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                Code snipped component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <Alert>
                <AlertTitle>Notification title</AlertTitle>
                <AlertDescription>Subtitle text goes here</AlertDescription>
              </Alert>
            </div>
          </div>

          <div className="flex flex-col gap-4 border min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                Button component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <Tabs kind="contained" value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  {tabs.map(tab => (
                    <TabsTrigger
                      icon={<Icon icon='carbon:3d-cursor' />}
                      key={tab.id}
                      value={tab.id}
                      onClose={handleTabClose}
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {tabs.map(tab => (
                  <TabsContent key={tab.id} value={tab.id}>
                    {tab.content}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                Button component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="min-h-[400px] relative">
              <div className="flex flex-wrap gap-[1px]">
                <Button className="w-[200px] h-12">Primary</Button>
                <Button className="w-[200px] h-12" kind="tertiary">Tertiary</Button>
                <Button className="w-[200px] h-12" kind="destructive">Destructive</Button>
                <Button className="w-[200px] h-12" kind="ghost">Ghost</Button>
                <Button className="w-[200px] h-12" kind="dark">Dark</Button>
              </div>
              <p className="mt-6 text-muted-foreground text-sm">2XL</p>
              <div className="flex flex-wrap gap-[1px] mt-2">
                <Button size={'2xl'}>Primary</Button>
                <Button size={'2xl'} kind="tertiary">Tertiary</Button>
                <Button size={'2xl'} kind="destructive">Destructive</Button>
                <Button size={'2xl'} kind="ghost">Ghost</Button>
                <Button size={'2xl'} kind="dark">Dark</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                Button component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-1 items-center justify-center min-h-[400px] relative">
              <Tag dismissable icon={<Icon icon="carbon:chip" />} bordered>
                Tag content
              </Tag>
              <Tag
                icon={<Icon icon="carbon:accept-action-usage" />}
                bordered
                kind="destructive"
              >
                Tag content
              </Tag>
              <Tag
                icon={<Icon icon="carbon:bicycle" />}
                bordered
                kind="outline"
              >
                Tag content
              </Tag>
              <Tag
                bordered
                dismissable
                icon={<Icon icon="carbon:ibm-cloud-kubernetes-service" />}
                kind="secondary"
              >
                Tag content
              </Tag>
              <Tag
                dismissable
                icon={<Icon icon="carbon:ibm-cloud-kubernetes-service" />}
                bordered
                kind="success"
              >
                Tag content
              </Tag>
              <Tag
                dismissable
                icon={<Icon icon="carbon:ibm-cloud-kubernetes-service" />}
                bordered
                kind="mauve"
              >
                Tag content
              </Tag>
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                Code snipped component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <CodeSnipped
                label="Copy to clipboard"
                labelSide="bottom"
                type="singleline"
              >
                yarn add carbon-components@latest yarn add
                carbon-components@latest
              </CodeSnipped>
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                Code snipped component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <Input className="max-w-md" placeholder="Placeholder" />
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                A simple tooltip component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <Button kind="dark">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:w-[625px]">
                    <DialogHeader>
                      <DialogDescription>Optional label</DialogDescription>
                      <DialogTitle>Add a custom domain</DialogTitle>
                    </DialogHeader>
                    <div>
                      <p className="text-[14px]">
                        Custom domains direct requests for your apps in this
                        Cloud Foundry organization to a URL that you own. A
                        custom domain can be a shared domain, a shared
                        subdomain, or a shared domain and host.
                      </p>
                      <Input
                        variant="white"
                        className="mt-7"
                        placeholder="Placeholder"
                      />
                      <Select>
                        <SelectTrigger color="white" className="w-full mt-6">
                          <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button className="w-full" kind="dark">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button className="w-full" type="submit">
                        Save changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                A simple accordion component
              </h2>
              <OpenInV0Button name="hello-world" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Product Information</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Our flagship product combines cutting-edge technology with
                      sleek design. Built with premium materials, it offers
                      unparalleled performance and reliability.
                    </p>
                    <p>
                      Key features include advanced processing capabilities, and
                      an intuitive user interface designed for both beginners
                      and experts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Shipping Details</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We offer worldwide shipping through trusted courier
                      partners. Standard delivery takes 3-5 business days, while
                      express shipping ensures delivery within 1-2 business
                      days.
                    </p>
                    <p>
                      All orders are carefully packaged and fully insured. Track
                      your shipment in real-time through our dedicated tracking
                      portal.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Return Policy</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                Select component
              </h2>
              <OpenInV0Button name="Select" className="w-fit" />
            </div>
            <div className="flex gap-[1px] items-center justify-center min-h-[400px] relative">
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple1">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                A contact form with Zod validation.
              </h2>
              <OpenInV0Button name="example-form" className="w-fit" />
            </div>
            <div className="flex items-center justify-center min-h-[500px] relative">
              <ExampleForm />
            </div>
          </div>

          <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                A complex component showing hooks, libs and components.
              </h2>
              <OpenInV0Button name="complex-component" className="w-fit" />
            </div>
            <div className="flex items-center justify-center min-h-[400px] relative">
              {/*<PokemonPage />*/}
            </div>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}
